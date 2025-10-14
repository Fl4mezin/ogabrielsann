import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import { TrendingDown } from 'lucide-react';

export function ChartDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <TrendingDown {...props} className={cn("w-8 h-8", props.className)} />
  );
}