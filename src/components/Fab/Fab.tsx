import { ElementType, ComponentPropsWithRef } from "react";
import clsx from "clsx";

interface FabProps<C extends ElementType> {
  component?: C;
  variant?: "circular" | "extended";
}

export const Fab = <C extends ElementType = "button">({
  variant = "circular",
  component,
  className,
  children,
  ...other
}: FabProps<C> & Omit<ComponentPropsWithRef<C>, keyof FabProps<C>>) => {
  const Component = component || "button";
  return (
    <Component
      className={clsx(
        "bg-indigo-500 hover:bg-indigo-700 dark:bg-cyan-700 hover:dark:bg-cyan-900 text-white rounded-full inline-flex justify-center items-center shadow-lg",
        variant === "circular" && "w-14 h-14",
        variant === "extended" &&
          "h-12 px-4 font-sans font-medium text-sm uppercase",
        className
      )}
      {...other}
    >
      {children}
    </Component>
  );
};
