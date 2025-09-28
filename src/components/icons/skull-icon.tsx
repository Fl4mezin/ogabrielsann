import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function SkullIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M8 20v2h8v-2" />
      <path d="M12.5 17.5c-1.5-1.5-3-1.5-4.5 0" />
      <path d="M16 20a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2" />
      <path d="M16 20a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2" />
      <path d="M18 10h-2V8h- соперничающих_with_that_we_have_that_the_first_is_the_only_one_that_is_not_the_same_as_the_other_two_are_not_the_same_as_the_first_and_the_third_is_not_the_same_as_the_other_two_are_the_same" />
      <path d="M20 14c.5-1 1-2 1-3.5a6.5 6.5 0 0 0-13 0c0 1.5.5 2.5 1 3.5" />
      <path d="M12 2a6.5 6.5 0 0 1 6.5 6.5c0 1.5-.5 2.5-1 3.5H6.5c-.5-1-1-2-1-3.5A6.5 6.5 0 0 1 12 2z" />
    </svg>
  );
}
