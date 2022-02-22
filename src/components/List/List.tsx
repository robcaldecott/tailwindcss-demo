import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import clsx from "clsx";
import { Typography } from "../Typography";

interface ListProps {
  dividers?: boolean;
}

export const List = ({
  dividers,
  className,
  ...other
}: ListProps & ComponentPropsWithoutRef<"ul">) => (
  <ul
    className={clsx(
      "py-2",
      dividers && "divide-y divide-slate-300 dark:divide-slate-700",
      className
    )}
    {...other}
  />
);

interface ListItemProps<C extends ElementType> {
  component?: C;
  button?: boolean;
}

export const ListItem = <C extends ElementType = "li">({
  component,
  button,
  className,
  divider,
  ...other
}: ListItemProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof ListItemProps<C>>) => {
  const Component = component || "li";
  return (
    <Component
      className={clsx(
        "py-2 px-4 w-full flex justify-start items-center space-x-2 focus:bg-slate-200 dark:focus:bg-slate-800 outline-none",
        button && "hover:bg-slate-100/75 dark:hover:bg-slate-800/75 text-left",
        className
      )}
      {...other}
    />
  );
};

interface ListItemTextProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  primary: ReactNode;
  secondary: ReactNode;
}

export const ListItemText = ({
  className,
  primary,
  secondary,
  ...other
}: ListItemTextProps) => (
  <div className={clsx("my-[6px] flex-auto min-w-0", className)} {...other}>
    <Typography component="span" variant="body1" block noWrap>
      {primary}
    </Typography>
    <Typography component="p" variant="body2" color="secondary" block noWrap>
      {secondary}
    </Typography>
  </div>
);
