import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import { Check } from 'lucide-react';

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Check {...props} className={cn("w-5 h-5", props.className)} />
  );
}