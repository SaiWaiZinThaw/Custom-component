import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

const ButtonVarients = cva(
  "flex justify-center items-center transition-all duration-300 active:scale-95 rounded",
  {
    variants: {
      variant: {
        default: "bg-blue-900 text-white hover:bg-blue-700",
        red: "bg-red-900 text-white hover-bg:red-900",
      },
      size: {
        sm: " w-[70px] h-[30px] p-2",
        md: " w-[90px] h-[50px] p-2",
        lg: " w-[110px] h-[40px] p-2",
      },
      defaultVariants: {
        variant: "default",
        size: "md",
      },
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVarients> {}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(ButtonVarients({ variant, size, className }))}
      >
        {children}
      </button>
    );
  }
);
export default ButtonComponent;
