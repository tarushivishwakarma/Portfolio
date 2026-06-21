import * as React from "react";
import { cn } from "./utils";

function Badge({
  className,
  variant = "default",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-all overflow-hidden";
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    destructive: "border-transparent bg-destructive text-white focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    outline: "text-foreground",
  };

  return (
    <span
      data-slot="badge"
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}

export { Badge };
