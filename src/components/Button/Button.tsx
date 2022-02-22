import { ComponentPropsWithRef, ElementType } from "react";
import clsx from "clsx";

interface ButtonProps<C extends ElementType> {
  component?: C;
  variant?: "contained" | "text";
  color?: "primary" | "error";
}

const buttonClasses = {
  base: "py-2 px-4 font-sans font-medium text-sm uppercase rounded h-9 min-h-full min-w-[64] outline-none",
  contained: {
    disabled: "bg-slate-200 text-slate-400",
    primary:
      "bg-indigo-500 hover:bg-indigo-700 text-white shadow focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-indigo-900",
    error:
      "bg-red-500 hover:bg-red-700 text-white shadow focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-red-500 dark:ring-offset-slate-900",
  },
  text: {
    disabled: "text-slate-400",
    primary:
      "text-indigo-500 hover:bg-indigo-100 dark:hover:bg-indigo-900 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-indigo-500 dark:ring-offset-slate-900",
    error:
      "text-red-500 hover:bg-red-100 dark:hover:bg-red-900 focus:bg-red-50 dark:focus:bg-red-900 hover:focus:bg-red-100 dark:hover:focus:bg-red-900 focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-red-500 dark:ring-offset-slate-900",
  },
};

export const Button = <C extends ElementType = "button">({
  variant = "contained",
  color = "primary",
  disabled,
  className,
  component,
  ...other
}: ButtonProps<C> & Omit<ComponentPropsWithRef<C>, keyof ButtonProps<C>>) => {
  const Component = component || "button";

  return (
    <Component
      className={clsx(
        buttonClasses.base,
        buttonClasses[variant][disabled ? "disabled" : color],
        className
      )}
      disabled={disabled}
      {...other}
    />
  );
};
