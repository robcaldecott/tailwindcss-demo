import { ElementType, ComponentPropsWithRef } from "react";
import clsx from "clsx";

interface PaperProps<C extends ElementType> {
  component?: C;
}

export const Paper = <C extends ElementType = "div">({
  component,
  className,
  children,
  ...other
}: PaperProps<C> & Omit<ComponentPropsWithRef<C>, keyof PaperProps<C>>) => {
  const Component = component || "div";
  return (
    <Component
      className={clsx(
        "bg-white dark:bg-slate-900 shadow rounded-md",
        className
      )}
      {...other}
    >
      {children}
    </Component>
  );
};
