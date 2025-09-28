import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const pixelatedButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase tracking-wider pixel-border shadow-pixel transition-transform active:translate-y-px active:translate-x-px active:shadow-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
        outline: 'border-2 border-current bg-transparent hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'shadow-none border-0 hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline shadow-none border-0',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface PixelatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pixelatedButtonVariants> {
  asChild?: boolean;
}

const PixelatedButton = React.forwardRef<HTMLButtonElement, PixelatedButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(pixelatedButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PixelatedButton.displayName = 'PixelatedButton';

export { PixelatedButton, pixelatedButtonVariants };
