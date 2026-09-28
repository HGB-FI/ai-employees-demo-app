// Session tokens of the mobile app. A token is refreshed shortly before it expires, so that no request goes out
// with a token that expires on the way (users would be logged out in the middle of their session).
export const REFRESH_MARGIN_MS = 60_000

/** Whether the app must refresh `token` before a request at `now` (milliseconds since the epoch). */
export function needsRefresh(token, now) {
  return token.expiresAt < now
}

/** A token as the auth service returns it: `expiresIn` seconds from `issuedAt`. */
export function tokenFrom(response, issuedAt) {
  return { value: response.access_token, expiresAt: issuedAt + response.expires_in * 1000 }
}
