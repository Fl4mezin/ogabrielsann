import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function GraduationCapIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.66 4 3 10 0v-5" />
    </svg>
  );
}
