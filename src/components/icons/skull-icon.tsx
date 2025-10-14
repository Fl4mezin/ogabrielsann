import { cn } from "@/lib/utils";
import { AlertTriangle } from 'lucide-react';
import type { SVGProps } from "react";

export function SkullIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <AlertTriangle {...props} className={cn("w-8 h-8", props.className)} />
  );
}