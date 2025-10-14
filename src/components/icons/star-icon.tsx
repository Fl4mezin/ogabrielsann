import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import { Star } from 'lucide-react';

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Star
      {...props}
      className={cn("w-5 h-5", props.className)}
    />
  );
}