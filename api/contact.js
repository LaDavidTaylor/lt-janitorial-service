const MAX_BODY_BYTES = 24_000;

function readField(body, name, maximumLength) {
  const value = body?.[name];
  return typeof value === "string" ? value.trim().slice(0, maximumLength) : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sameOriginRequest(request) {
  const origin = request.headers.origin;
  const host = request.headers.host;
  if (!origin || !host) return true;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!sameOriginRequest(request)) {
    return response.status(403).json({ ok: false, error: "Invalid request origin" });
  }

  const contentLength = Number(request.headers["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return response.status(413).json({ ok: false, error: "Request is too large" });
  }

  const body = request.body && typeof request.body === "object" ? request.body : {};
  if (readField(body, "website", 200)) {
    return response.status(200).json({ ok: true });
  }

  const fields = {
    name: readField(body, "name", 120),
    company: readField(body, "company", 160),
    phone: readField(body, "phone", 60),
    email: readField(body, "email", 254),
    facility: readField(body, "facility", 160),
    location: readField(body, "location", 160),
    size: readField(body, "size", 80) || "Not provided",
    frequency: readField(body, "frequency", 120) || "Not provided",
    program: readField(body, "program", 80) || "Not provided",
    serviceWindow: readField(body, "serviceWindow", 160) || "Not provided",
    startDate: readField(body, "startDate", 40) || "Not provided",
    services: readField(body, "services", 2_000) || "Not provided",
    notes: readField(body, "notes", 2_000) || "Not provided",
  };

  const requiredFields = ["name", "company", "phone", "email", "facility", "location"];
  if (requiredFields.some((field) => !fields[field])) {
    return response.status(422).json({ ok: false, error: "Please complete every required field" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return response.status(422).json({ ok: false, error: "Please enter a valid email address" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "clean@ltjs.info";
  if (!resendApiKey || !fromEmail) {
    console.error("Contact form email configuration is incomplete");
    return response.status(503).json({ ok: false, error: "The form is temporarily unavailable" });
  }

  const rows = [
    ["Name", fields.name],
    ["Company or facility", fields.company],
    ["Phone", fields.phone],
    ["Email", fields.email],
    ["Facility type", fields.facility],
    ["City or ZIP code", fields.location],
    ["Approximate square footage", fields.size],
    ["Preferred frequency", fields.frequency],
    ["Program interest", fields.program],
    ["Preferred service window", fields.serviceWindow],
    ["Desired start date", fields.startDate],
    ["Services and priorities", fields.services],
    ["Additional notes", fields.notes],
  ];
  const subject = `Facility cleaning request from ${fields.company}`;
  const text = [
    "New LT Janitorial website inquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:720px;margin:0 auto;color:#17140d">
      <h1 style="font-size:24px">New LT Janitorial website inquiry</h1>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <th style="padding:10px;border:1px solid #d8d1bd;text-align:left;vertical-align:top;width:34%">${escapeHtml(label)}</th>
                <td style="padding:10px;border:1px solid #d8d1bd;white-space:pre-wrap">${escapeHtml(value)}</td>
              </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: notificationEmail.split(",").map((email) => email.trim()).filter(Boolean),
        reply_to: fields.email,
        subject,
        text,
        html,
      }),
    });

    if (!resendResponse.ok) {
      console.error(`Resend rejected the contact notification with status ${resendResponse.status}`);
      return response.status(502).json({ ok: false, error: "The message could not be delivered" });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact notification failed", error instanceof Error ? error.message : "Unknown error");
    return response.status(502).json({ ok: false, error: "The message could not be delivered" });
  }
}
