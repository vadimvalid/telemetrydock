export type DeviceEventType = "status-change" | "rule-triggered" | "command";

export interface DeviceEvent {
  id: string;
  type: DeviceEventType;
  deviceId: string;
  /** Set for `rule-triggered` and rule-issued `command` events. */
  ruleId?: string;
  message: string;
  /** epoch ms */
  timestamp: number;
}
