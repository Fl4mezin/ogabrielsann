import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import { ShieldCheck } from 'lucide-react';

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ShieldCheck {...props} className={cn("w-8 h-8", props.className)} />
  );
}