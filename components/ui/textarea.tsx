import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-[8rem] w-full px-4 py-3 text-sm",
        "bg-[var(--bs-navy-light)] border border-[var(--bs-navy-border)]",
        "text-[var(--bs-white)] placeholder:text-[var(--bs-muted)]",
        "rounded-none outline-none resize-y",
        "transition-[border-color,box-shadow] duration-200",
        "focus-visible:border-[var(--bs-gold)] focus-visible:shadow-[0_0_0_2px_rgba(201,168,76,0.12)]",
        "disabled:pointer-events-none disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
