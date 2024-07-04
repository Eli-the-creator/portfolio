import React from "react";
import { cn } from "../../utils/cn";

export default function Badge({ text, className }) {
  return (
    <div
      className={cn(
        className,
        "bg-neutral-500/10 hover:text-zinc-300 hover:bg-neutral-900/10 hover:border-slate-50/30 max-w-fit scale-250 border-[1px] transition-all duration-150 border-slate-50/10   py-[3.4px] px-4 rounded-full"
      )}
    >
      {text}
    </div>
  );
}
