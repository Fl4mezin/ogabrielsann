import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import { GraduationCap } from 'lucide-react';

export function GraduationCapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <GraduationCap {...props} className={cn("w-8 h-8", props.className)} />
  );
}