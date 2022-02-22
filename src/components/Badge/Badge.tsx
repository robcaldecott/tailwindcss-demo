import { ComponentPropsWithoutRef } from "react";

export const Badge = ({
  children,
  ...other
}: ComponentPropsWithoutRef<"span">) => (
  <span
    className="rounded-full px-2 inline-flex h-5 min-w-[20px] justify-center items-center bg-indigo-500 text-white font-sans text-xs font-medium"
    {...other}
  >
    {children}
  </span>
);
