import { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";
import { Typography } from "../Typography";

export const Card = ({
  className,
  ...other
}: ComponentPropsWithoutRef<"div">) => (
  <div
    className={clsx("bg-white dark:bg-slate-900 shadow rounded-md", className)}
    {...other}
  />
);

interface CardHeaderProps {
  title: ReactNode;
  subheader: ReactNode;
}

export const CardHeader = ({ title, subheader }: CardHeaderProps) => (
  <div className="p-4 flex flex-col">
    <Typography variant="h5" noWrap>
      {title}
    </Typography>
    <Typography variant="body1" color="secondary" noWrap>
      {subheader}
    </Typography>
  </div>
);

export const CardContent = (props: ComponentPropsWithoutRef<"div">) => (
  <div className="p-4" {...props} />
);

export const CardActions = (props: ComponentPropsWithoutRef<"div">) => (
  <div className="p-2 flex items-center space-x-2" {...props} />
);
