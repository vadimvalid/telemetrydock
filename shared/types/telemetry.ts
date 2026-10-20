/** Numeric Device fields that are streamed as telemetry. Unit is derived from the metric. */
export type TelemetryMetric = "temperature" | "power" | "health";

export interface TelemetryPoint {
  deviceId: string;
  metric: TelemetryMetric;
  value: number;
  /** epoch ms */
  timestamp: number;
}
