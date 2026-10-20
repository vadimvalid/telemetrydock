---
paths:
  - "test/**"
  - "vitest.config.ts"
  - "playwright.config.ts"
---

# Testing

- `test/unit/` — pure TS (simulator, rule engine, store logic) in the `unit` Vitest project (node env). Fast, deterministic: inject seeded RNG and fixed time; use `vi.useFakeTimers()` for intervals.
- `test/nuxt/` — component tests in the `nuxt` project with `mountSuspended` from `@nuxt/test-utils/runtime`. Assert on rendered text/roles and emitted events, not internals.
- `test/e2e/` — Playwright: one end-to-end scenario per demo flow (overheat → rule fires → fan ON → event logged). Select by role/label, not CSS classes.
- Test names describe behavior: `turns fan on above threshold and off below threshold - hysteresis`.
- Same division of work as the rest of the logic: the owner writes tests; Claude suggests cases and reviews.
