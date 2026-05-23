import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-[2.6rem] w-full min-w-0 px-4 py-1 text-sm",
        "bg-[var(--bs-navy-light)] border border-[var(--bs-navy-border)]",
        "text-[var(--bs-white)] placeholder:text-[var(--bs-muted)]",
        "rounded-none outline-none",
        "transition-[border-color,box-shadow] duration-200",
        "focus-visible:border-[var(--bs-gold)] focus-visible:shadow-[0_0_0_2px_rgba(201,168,76,0.12)]",
        "file:text-[var(--bs-white)] file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:opacity-40",
        "aria-invalid:border-[var(--bs-destructive)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
