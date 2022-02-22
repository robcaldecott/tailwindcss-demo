import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export const Divider = ({ className }: ComponentPropsWithoutRef<"hr">) => (
  <hr
    className={clsx(
      "border-solid border-0 border-b border-b-slate-300 dark:border-b-slate-700",
      className
    )}
  />
);
