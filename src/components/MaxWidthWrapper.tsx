import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5  overflow-x-hidden overflow-y-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
