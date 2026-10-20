# Product specification

## Product statement

TelemetryDock is a compact IoT operations console for virtual devices. It helps users understand device health, observe telemetry, trigger device actions, and automate simple responses to sensor readings.

## Target audience

- Developers learning IoT concepts.
- Small teams prototyping sensor dashboards.
- Employers evaluating frontend architecture and interactive UI skills.

## Navigation

- Overview
- Devices
- Automations
- Events
- Settings (optional)

## Device model

Each device has:

- `id`
- `name`
- `type`
- `location`
- `status`
- current reading or actuator state
- unit
- last update timestamp
- optional battery level

Suggested device types:

- temperature sensor
- humidity sensor
- energy meter
- relay
- fan
- light

## Telemetry behavior

- Update every 1–2 seconds in demo mode.
- Values drift gradually and remain within plausible ranges.
- Scenarios can force overheating, cooling, battery drain, or disconnects.
- Device status should distinguish online, offline, and error.
- UI should show when data is stale.

## Automation example

Condition: sensor value greater than 28°C  
Action: turn on a selected fan

Recommended extension:

- Add hysteresis: turn on above 28°C, turn off below 25°C.
- Record every trigger and action in the event log.
- Avoid duplicate actions when the actuator is already in the target state.
- Detect circular rules or cap chained rule execution.

## Non-functional requirements

- Responsive layout.
- Keyboard-accessible controls and visible focus states.
- Consistent loading, empty, stale, and error states.
- Typed domain models.
- Unit tests for rule evaluation.
- One Playwright test for the core automation scenario.
