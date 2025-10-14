import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import { Briefcase } from 'lucide-react';


export function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Briefcase {...props} className={cn("w-8 h-8", props.className)} />
  );
}