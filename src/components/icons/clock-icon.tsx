import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import { Clock } from 'lucide-react';

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Clock {...props} className={cn("w-8 h-8", props.className)} />
  );
}