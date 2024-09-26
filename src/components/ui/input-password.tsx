import * as React from "react"
import { cn } from "../../lib/utils"
import { Eye, EyeOff } from "lucide-react"

export interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, iconStart, iconEnd, ...props }, ref) => {

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  function togglePasswordVisibility() {
    setShowPassword((show) => !show);
  };

    return (
      <div className="relative group">
        {iconStart && (
          <span className="absolute left-2 top-3 text-gray-500 group-focus-within:text-gray-800">
            {iconStart}
          </span>
        )}
        <input
          {...props}
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent pl-7 pr-8 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
        />
        {iconEnd && (
          <button
            type="button" 
            className="cursor-pointer flex items-center text-gray-500 group-focus-within:text-gray-800 absolute right-2 top-3"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
          </button>
        )}
      </div>
    )
  }
)




// const inputVariants = cva(
//   "flex items-center h-10 w-full px-3 py-2 text-sm bg-transparent file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border border-transparent focus-within:outline-none aria-invalid:ring-1 aria-invalid:ring-destructive aria-invalid:focus-within:ring-2 aria-invalid:focus-within:ring-destructive",

//   {
//     variants: {
//       rounded: {
//         none: "rounded-none",
//         md: "rounded-md",
//       },
//       variant: {
//         outline:
//           "border-borde focus-within:border-primary focus-within:shadow-[0_0px_0px_1px_hsl(var(--primary))] aria-invalid:border-transparent",
//         filled:
//           "border-2 bg-background focus-within:border-primary focus-within:bg-transparent",
//         underlined:
//           "rounded-none border-b-border focus-within:border-b-primary focus-within:shadow-[0_1px_0px_0px_hsl(var(--primary))]",
//         unstyled: "",
//       },
//     },
//     defaultVariants: {
//       rounded: "md",
//       variant: "outline",
//     },
//   }
// )

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement>,
//     VariantProps<typeof inputVariants> {
//   iconStart?: React.ReactNode
//   iconEnd?: React.ReactNode
// }

// const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
//   (
//     { className, rounded, variant, iconStart, iconEnd, ...props },
//     ref
//   ) => {
//     const [showPassword, setShowPassword] = React.useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword((show) => !show);
//   };

//     return (
//       <div
//         className={cn("group",
//           inputVariants({ variant, rounded, className }),
//           className
//         )}
//       >
//         {iconStart && (
//           <span className="pointer-events-none flex items-center text-gray-500 group-focus-within:text-gray-800">
//             {iconStart}
//           </span>
//         )}
//         <input
//           ref={ref}
//           {...props}
//           type={showPassword ? 'text' : 'password'}
//           className={cn(
//             "w-full bg-transparent outline-none focus-visible:outline-none",
//             {
//               "pl-1.5": !!iconStart,
//               "pr-1.5": !!iconEnd,
//             }
//           )}
//         />
//         {iconEnd && (
//           <button 
//             type="button" 
//             className="cursor-pointer flex items-center text-gray-500 group-focus-within:text-gray-800"
//             onClick={togglePasswordVisibility}
//           >
//             {showPassword ? < Eye size={16}/> : <EyeOff size={16} />}
//           </button>
//         )}
//       </div>
//     )
//   }
// )
// Input.displayName = "InputPassword"

export { InputPassword }
