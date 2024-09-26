import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconStart, iconEnd, ...props }, ref) => {

    return (
      <div className="relative group">
        {iconStart && (
          <span className="absolute left-2 top-3 text-gray-500 group-focus-within:text-gray-800">
            {iconStart}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent pl-7 pr-2 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {iconEnd && (
          <button>
            {iconEnd}
          </button>
        )}
      </div>
    )
  }
)
Input.displayName = "Input";

export { Input }
