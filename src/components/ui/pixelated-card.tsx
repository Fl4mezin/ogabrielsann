import * as React from 'react';
import { cn } from '@/lib/utils';

const PixelatedCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-card text-card-foreground shadow-pixel pixel-border',
        className
      )}
      {...props}
    />
  )
);
PixelatedCard.displayName = 'PixelatedCard';

export { PixelatedCard };
