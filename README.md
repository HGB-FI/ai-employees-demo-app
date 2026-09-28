# Mobile app — session logic

The session handling of the demo mobile app used in the "AI Employees by HGB" keynote: tokens, refresh and the
authorized request wrapper. No dependencies; tests use Node's built-in runner.

```bash
npm test
```

Changes by AI employees arrive as draft pull requests from branches named `kai/<work item>/run-<id>`, planned by an
employee, approved by a person, and verified by these tests. A person reviews and merges.
