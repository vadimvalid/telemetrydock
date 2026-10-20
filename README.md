# TelemetryDock — IoT Monitoring & Automation Platform

TelemetryDock is a portfolio project concept: a web platform for monitoring virtual IoT devices, streaming telemetry, defining automation rules, and inspecting event history.

## Product goals

- Build a polished Nuxt 4 / Vue 3 / TypeScript application.
- Simulate sensors and actuators without requiring physical hardware.
- Display telemetry and device state in a responsive dashboard.
- Let users define rules such as `temperature > 28°C → turn fan ON`.
- Keep simulation logic independent from UI components and test it.
- Leave a clear path to real devices through MQTT over WebSocket.

## Planned stack

- Nuxt 4, Vue 3, TypeScript
- Pinia for client state
- Tailwind CSS for styling
- Apache ECharts / vue-echarts for charts
- Zod for validation
- PostgreSQL + Drizzle ORM for persistence (phase 2)
- Vitest + Vue Test Utils for unit tests
- Playwright for E2E tests
- VueUse `useWebSocket` if a WebSocket transport is introduced

## MVP pages

1. **Overview** — online/offline/error counts, current readings, charts, alerts, recent events.
2. **Devices** — searchable/filterable device inventory.
3. **Device details** — telemetry history, controls, connection state, command log.
4. **Automations** — rule builder with conditions and actions.
5. **Events** — searchable, filterable event timeline.

## Core demo scenario

1. Start the simulator.
2. Open a temperature sensor and enable its overheating scenario.
3. Create a rule: temperature greater than 28°C → turn fan on.
4. Watch the fan change state.
5. Open Events and inspect the rule trigger and command.

## Suggested 5-week roadmap

### Week 1 — UI and devices

- Set up Nuxt and design tokens.
- Build layout, navigation, responsive dashboard.
- Seed 8–12 virtual devices.
- Implement device list, filters, details pages.

### Week 2 — simulation and charts

- Generate smooth, plausible telemetry.
- Update metrics and charts live.
- Add pause/speed controls.
- Simulate offline/online transitions.

### Week 3 — automations

- Build rule editor.
- Implement typed rule engine.
- Add event journal and prevent repeated command spam.
- Unit-test the rule engine.

### Week 4 — persistence and quality

- Add server API routes and PostgreSQL.
- Persist devices, rules, and events.
- Handle loading, empty, and error states.
- Add end-to-end test for the main scenario.

### Week 5 — polish and release

- Test mobile layout and accessibility.
- Write architecture notes and screenshots.
- Add CI for type checks and tests.
- Deploy and prepare a 2-minute demo.

## Suggested project structure

```text
app/
  components/
    dashboard/
    devices/
    automations/
    layout/
  composables/
  stores/
  pages/
  layouts/
shared/
  types/
  utils/
server/
  api/
  utils/
tests/
  unit/
  e2e/
```

## Engineering details worth demonstrating

- Realistic sensor drift instead of arbitrary random values.
- Clear device statuses: online, offline, error.
- Idempotent automation actions and hysteresis to avoid rapid toggling.
- Typed API contracts and runtime validation.
- Loading, error, empty, and stale-data states.
- Unit tests for the simulator/rule engine and an E2E test for the demo scenario.
- Explain why SSR is used for initial page data and client-side updates are used for live telemetry.

## Important scope note

Start with a local simulation engine and seeded data. Add persistence and a backend only after the core scenario works. MQTT and physical ESP32 hardware are optional extensions, not MVP requirements.
