import { needsRefresh } from "./token.js"

/**
 * Sends `request` with the session's token, refreshing it first when needed. `refresh` asks the auth service for a
 * new token; `send` performs the request with a token.
 */
export async function authorizedRequest(session, request, { refresh, send, now = Date.now() }) {
  if (needsRefresh(session.token, now)) session.token = await refresh(session.token)
  return send(request, session.token.value)
}
