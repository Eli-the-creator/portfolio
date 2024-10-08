import { cn } from "../../utils/cn";

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("flex flex-wrap gap-4 justify-center", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-black border-white/[0.2]  border justify-between flex flex-col space-y-2",
        className
      )}
    >
      <div className="p-2">{header}</div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-zinc-200 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-zinc-500 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
