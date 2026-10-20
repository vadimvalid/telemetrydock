# Architecture notes

## Initial architecture

For the first milestone, keep simulation logic in a pure TypeScript module. UI components should render state and dispatch user commands, not implement simulation rules.

```text
Simulator → Telemetry points → Device state → Rule engine
                                      ↓             ↓
                                  Dashboard      Commands
                                      ↓             ↓
                                  Charts        Event log
```

## Responsibilities

### UI
- Pages and reusable components.
- Forms and client-side interactions.
- Display of current readings and events.

### State
- Devices store: current device state and inventory.
- Automations store: rule definitions and enabled state.
- Events store: recent event timeline.
- Keep high-frequency telemetry history bounded to avoid unbounded memory growth.

### Domain logic
- Simulator: generate plausible sensor readings.
- Rule engine: evaluate conditions and produce commands.
- Command handler: update actuators idempotently.
- Event creator: produce typed event records.

### Server phase
After the client-side MVP is stable, move persistence to Nuxt server routes and PostgreSQL. If the simulator must run while no browser is open, run it as a separate long-lived process rather than relying on a page timer.

## Real hardware extension

A future architecture can connect an MQTT broker to a server-side adapter. Browser clients should not receive broker credentials. If using MQTT.js in a browser, use a broker configured for MQTT over WebSocket and enforce authentication/authorization.
