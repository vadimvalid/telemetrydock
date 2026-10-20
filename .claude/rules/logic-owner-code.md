---
paths:
  - "shared/**/*.ts"
  - "app/stores/**/*.ts"
  - "app/composables/**/*.ts"
  - "app/utils/**/*.ts"
  - "server/**/*.ts"
---

# Owner-written logic (see "Division of work" in CLAUDE.md)

Claude reviews and guides here; it writes code only when the owner explicitly asks for it in this file.

Conventions to check and teach:

- **shared/types**: every type/interface `export`ed; string-literal unions for enums; one domain per file; reuse unions (e.g. `DeviceEvent.type` should use `DeviceEventType`, not repeat the literals). Timestamps: pick one representation (ISO string or epoch ms) and use it everywhere.
- **shared/utils**: pure functions, no Vue/Nuxt imports, no hidden globals — inject randomness and time (`rng`, `now`) so simulator and rule engine are deterministic in tests.
- **Stores (Pinia)**: setup-store syntax `defineStore('devices', () => {...})`; expose state as `ref`, derived data as `computed`, mutations as functions; return everything that must be SSR-serialized. Components use `storeToRefs` for state/getters. Don't put high-frequency telemetry history in deep reactive state — bound it and use `shallowRef`.
- **Composables**: `useX` naming, return refs (not reactive) so destructuring works; accept `MaybeRefOrGetter` inputs and read them with `toValue`; clean up timers/listeners (VueUse `useIntervalFn` handles it). No module-level mutable state — that leaks between SSR requests; use `useState` or Pinia.
- **Server (phase 2)**: `defineEventHandler`, validate input with Zod via `readValidatedBody`/`getValidatedQuery`, throw `createError({ statusCode, message })`.
- **Validation**: Zod schemas live next to types and derive types with `z.infer` where both are needed, to avoid duplication.
