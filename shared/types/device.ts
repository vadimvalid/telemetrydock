export type DeviceStatus = "online" | "warning" | "error" | "offline";

/** Production equipment reports telemetry; actuators (fan) receive commands from rules. */
export type DeviceType = "cnc-machine" | "robotic-arm" | "conveyor" | "cooling-fan";

export type ActuatorState = "on" | "off";

export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  zoneId: string;
  status: DeviceStatus;
  /** 0–100, % */
  health: number;
  /** 0–100, % of time online */
  uptime: number;
  /** °C */
  temperature: number;
  /** kW */
  power: number;
  /** Only for actuators (`cooling-fan`); undefined for equipment. */
  actuatorState?: ActuatorState;
  /** epoch ms */
  lastMaintenanceAt: number;
  /** epoch ms, last telemetry update — used to detect stale data */
  updatedAt: number;
}
