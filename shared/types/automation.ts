import type { TelemetryMetric } from "./telemetry";

export type ConditionOperator = "gt" | "lt";

export type DeviceCommand = "turn_on" | "turn_off";

export interface RuleCondition {
  deviceId: string;
  metric: TelemetryMetric;
  operator: ConditionOperator;
  threshold: number;
}

export interface RuleAction {
  deviceId: string;
  command: DeviceCommand;
}

export interface AutomationRule {
  id: string;
  name: string;
  enabled: boolean;
  condition: RuleCondition;
  action: RuleAction;
  /**
   * Gap that resets the rule, in metric units. E.g. `gt 60` + hysteresis 5:
   * fires above 60, re-arms only after the value drops below 55.
   */
  hysteresis: number;
}
