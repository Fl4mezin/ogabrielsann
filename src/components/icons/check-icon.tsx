import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="crispEdges"
      {...props}
      className={cn("w-4 h-4", props.className)}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
