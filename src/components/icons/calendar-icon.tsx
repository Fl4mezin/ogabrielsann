import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import { Calendar } from 'lucide-react';

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
   <Calendar {...props} className={cn("w-8 h-8", props.className)} />
  );
}