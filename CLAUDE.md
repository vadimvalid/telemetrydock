# TelemetryDock

IoT monitoring dashboard for virtual devices: live telemetry, device inventory, automation rules, event log. Portfolio project — product docs live in `docs/` (spec, architecture, roadmap, demo script).

## Stack (verify in package.json before relying on an API)

- Nuxt 4.6 (`app/` srcDir), Vue 3.5, TypeScript, `<script setup lang="ts">` only
- Nuxt UI 4 (Tailwind CSS 4, Reka UI, Iconify/lucide icons)
- Pinia 4 via `@pinia/nuxt`, VueUse 15 via `@vueuse/nuxt`
- ECharts 6 + vue-echarts 8, Zod 4
- Vitest 5 (`unit` + `nuxt` projects), `@nuxt/test-utils`, Playwright for E2E
- pnpm

Not Nuxt 5: no `nuxt/server` imports, no Nitro v3 / h3 v2 APIs. If a skill or doc example targets Nuxt 5, adapt it to Nuxt 4.

## Commands

- `pnpm dev` — dev server on http://localhost:3000
- `pnpm test:unit` / `pnpm test:nuxt` — Vitest projects
- `pnpm exec eslint .` — lint; `pnpm exec nuxi typecheck` — types
- `pnpm exec nuxi prepare` — regenerate `.nuxt` types after config/module changes

## Layout

```text
app/          components/, composables/, stores/, pages/, layouts/, assets/css/, app.config.ts
shared/       types/ and utils/ shared by app and server (auto-imported in Nuxt 4)
server/       api/, utils/ (phase 2)
test/         unit/ (pure TS, node env), nuxt/ (components, nuxt env), e2e/ (Playwright)
```

## Division of work — important

The owner is learning by writing the functionality themselves. Claude writes the presentation layer.

- **Owner writes:** `shared/**`, `app/stores/**`, `app/composables/**`, `server/**`, `test/**`, and the `<script setup>` of pages. In these files Claude explains, reviews, and suggests signatures or pseudo-code — it does not write the implementation unless the owner explicitly asks for code in that file.
- **Claude writes:** `<template>` and styles of components, layouts and pages; `app/assets/css/**`; `app.config.ts`; presentational components in `app/components/**` (including their props/emits definitions).
- **Contract:** types in `shared/types` are the interface between the two. Presentational components take data via typed props and report user actions via emits; they never import stores. Pages connect stores to components.
- If a template needs data the types/stores don't provide yet, say what's missing and propose the shape instead of inventing it.

Teaching mode: when pointing out an issue in owner code, explain why and link the relevant Vue/Nuxt concept; keep steps small.

## Tooling for Claude

- MCP `nuxt-docs` and `nuxt-ui` — official docs; check component APIs (props, slots, `ui` keys) there before using a Nuxt UI component. `context7` — docs for Pinia, VueUse, ECharts, Zod, Vitest. `playwright` — open the running app to check layout visually.
- Project skills in `.claude/skills/` (sources in `.claude/skills/SOURCES.md`).
- Path-scoped rules in `.claude/rules/`.
