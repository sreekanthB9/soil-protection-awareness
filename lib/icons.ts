import type { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

export function getIcon(name: string): LucideIcon {
  const icon = Icons[name as keyof typeof Icons];
  if (icon && typeof icon === "function") {
    return icon as LucideIcon;
  }
  return Icons.Circle;
}
