import { ComponentPropsWithoutRef } from "react";

interface SkeletonProps {
  height?: number | string;
}

export const Skeleton = ({
  height,
  style,
  ...other
}: SkeletonProps & ComponentPropsWithoutRef<"span">) => (
  <span
    // eslint-disable-next-line no-octal-escape
    className="bg-gray-200 dark:bg-gray-700 rounded before:content-['\00a0'] block h-auto animate-pulse scale-y-75"
    style={{ height, ...style }}
    {...other}
  />
);
