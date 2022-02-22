import { ComponentPropsWithoutRef, ElementType } from "react";
import clsx from "clsx";

export interface IconButtonProps<C extends ElementType> {
  component?: C;
  edge?: "start" | "end";
}

const IconButton = <C extends ElementType = "button">({
  className,
  edge,
  children,
  component,
  ...other
}: IconButtonProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof IconButtonProps<C>>) => {
  const Component = component || "button";
  return (
    <Component
      className={clsx(
        "flex items-center justify-center p-3 rounded-full",
        edge === "end" && "-mr-3",
        edge === "start" && "-ml-3",
        className
      )}
      {...other}
    >
      {children}
    </Component>
  );
};

export { IconButton };
