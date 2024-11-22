import React from "react"

import { cn } from "../../lib/utils"

const Card = React.forwardRef(({ className, src, alt = "", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border-2 relative text-card-foreground shadow-sm mt-6 cursor-pointer",
      className
    )}
  >
    <img 
      src={src} 
      alt={alt} 
      className="absolute inset-0 w-full h-full object-cover rounded-lg"
    />
    <div className="absolute inset-0 bg-black/50 rounded-lg" />
    <div className="relative z-10 h-full" {...props} />
  </div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-row items-center justify-between text-white", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-base flex flex-row items-center gap-2 font-bold  leading-none tracking-tight text-white [text-shadow:_2px_2px_0_rgb(0_0_0)]",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"


const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute justify-end bottom-0 right-0 p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
