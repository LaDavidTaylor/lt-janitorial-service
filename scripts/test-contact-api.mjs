import assert from "node:assert/strict";
import handler from "../api/contact.js";

function responseRecorder() {
  return {
    statusCode: 200,
    headers: {},
    body: undefined,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    },
  };
}

const methodResponse = responseRecorder();
await handler({ method: "GET", headers: {}, body: {} }, methodResponse);
assert.equal(methodResponse.statusCode, 405);

const invalidResponse = responseRecorder();
await handler(
  { method: "POST", headers: { host: "localhost", origin: "http://localhost" }, body: {} },
  invalidResponse,
);
assert.equal(invalidResponse.statusCode, 422);

process.env.RESEND_API_KEY = "test_key";
process.env.RESEND_FROM_EMAIL = "LT Janitorial Website <website@ltjanitorial.us>";
process.env.CONTACT_NOTIFICATION_EMAIL = "clean@ltjs.info";

const originalFetch = global.fetch;
let outboundRequest;
global.fetch = async (url, options) => {
  outboundRequest = { url, options };
  return { ok: true, status: 200 };
};

try {
  const successResponse = responseRecorder();
  await handler(
    {
      method: "POST",
      headers: { host: "localhost", origin: "http://localhost", "content-length": "500" },
      body: {
        name: "Codex Contact Test",
        company: "Test Facility",
        phone: "4695550100",
        email: "codex@example.com",
        facility: "Office or corporate facility",
        location: "Dallas, TX",
        services: "Routine cleaning",
      },
    },
    successResponse,
  );

  assert.equal(successResponse.statusCode, 200);
  assert.deepEqual(successResponse.body, { ok: true });
  assert.equal(outboundRequest.url, "https://api.resend.com/emails");

  const outboundBody = JSON.parse(outboundRequest.options.body);
  assert.equal(outboundBody.reply_to, "codex@example.com");
  assert.deepEqual(outboundBody.to, ["clean@ltjs.info"]);
  assert.match(outboundBody.subject, /Test Facility/);
  assert.doesNotMatch(outboundRequest.options.body, /test_key/);
} finally {
  global.fetch = originalFetch;
  delete process.env.RESEND_API_KEY;
  delete process.env.RESEND_FROM_EMAIL;
  delete process.env.CONTACT_NOTIFICATION_EMAIL;
}

console.log("PASS Contact API validation and delivery request");
