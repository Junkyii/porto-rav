import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-white/10 text-white",
        outline: "border-white/10 text-gray-300 bg-transparent",
        success: "border-green-900/20 bg-green-900/10 text-green-400 font-mono text-xs",
        destructive: "border-red-500/20 bg-red-500/10 text-red-400",
        blue: "border-blue-500/30 bg-blue-500/80 text-white backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
