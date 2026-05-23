import * as React from "react";
import { cn } from "@/lib/utils";

function NativeSelect({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <select
      data-slot="native-select"
      className={cn(
        "h-[2.6rem] w-full px-4 text-sm",
        "bg-[var(--bs-navy-light)] border border-[var(--bs-navy-border)]",
        "text-[var(--bs-white)]",
        "rounded-none outline-none",
        "transition-[border-color,box-shadow] duration-200",
        "focus-visible:border-[var(--bs-gold)] focus-visible:shadow-[0_0_0_2px_rgba(201,168,76,0.12)]",
        "disabled:pointer-events-none disabled:opacity-40",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export { NativeSelect };
