import assert from "node:assert/strict"
import { test } from "node:test"
import { needsRefresh, tokenFrom } from "../src/token.js"

test("an expired token is refreshed", () => {
  assert.equal(needsRefresh({ expiresAt: 1_000 }, 2_000), true)
})

test("a token with ten minutes left is kept", () => {
  assert.equal(needsRefresh({ expiresAt: 10 * 60_000 }, 0), false)
})

test("tokens expire expires_in seconds after they were issued", () => {
  assert.deepEqual(tokenFrom({ access_token: "t", expires_in: 3600 }, 1_000), { value: "t", expiresAt: 3_601_000 })
})
