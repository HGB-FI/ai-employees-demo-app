import assert from "node:assert/strict"
import { test } from "node:test"
import { authorizedRequest } from "../src/session.js"

test("an expired token is refreshed before the request", async () => {
  const session = { token: { value: "old", expiresAt: 1_000 } }
  const sent = await authorizedRequest(session, "GET /me", {
    now: 2_000,
    refresh: async () => ({ value: "new", expiresAt: 3_600_000 }),
    send: async (request, token) => `${request} with ${token}`,
  })
  assert.equal(sent, "GET /me with new")
})
