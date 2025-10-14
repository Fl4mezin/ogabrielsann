import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import { Book } from 'lucide-react';

export function BookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Book {...props} className={cn("w-8 h-8", props.className)} />
  );
}