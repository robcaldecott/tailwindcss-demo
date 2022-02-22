import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export const AppBar = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"header">) => (
  <header
    className={clsx(
      "bg-slate-600 text-white px-4 sm:px-6 shadow-lg h-12 min-h-full flex items-center sticky top-0",
      className
    )}
    {...other}
  >
    {children}
  </header>
);
