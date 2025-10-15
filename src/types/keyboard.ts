interface KeyboardStateI {
  capsLock: boolean;
  shift: boolean;
  isVisible: boolean;
}

interface KeyI {
  id: string;
  display: string | React.ReactNode;
  value: string;
  type: "character" | "modifier" | "function";
  width?: number;
}

type KeyboardActionT =
  | { type: "TOGGLE_SHIFT" }
  | { type: "TOGGLE_CAPS_LOCK" }
  | { type: "TOGGLE_VISIBILITY" };

export type { KeyboardStateI, KeyboardActionT, KeyI };
