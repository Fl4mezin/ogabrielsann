import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function ChartDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="crispEdges"
      {...props}
      className={cn("w-8 h-8", props.className)}
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
      <path d="M19 14v-5h-5" />
    </svg>
  );
}
