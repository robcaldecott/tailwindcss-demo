import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from "react";
import { FieldProps } from "formik";
import { ChevronDownIcon } from "@heroicons/react/solid";
import clsx from "clsx";

interface SelectFieldProps {
  label: ReactNode;
  error?: ReactNode;
}

export const SelectField = ({
  className,
  label,
  error,
  required,
  value,
  ...other
}: SelectFieldProps & ComponentPropsWithoutRef<"select">) => (
  <label className={clsx("block", className)}>
    <span
      className={clsx(
        "font-sans text-sm font-medium",
        error ? "text-red-500" : "text-slate-700 dark:text-slate-300",
        required && "after:content-['*'] after:ml-0.5"
      )}
    >
      {label}
    </span>
    <span className="block relative">
      <select
        className={clsx(
          "bg-white dark:bg-slate-900 rounded-md block w-full mt-1 p-2 pr-8 font-sans text-base outline-none placeholder:text-slate-400 border focus:outline-none focus:ring-1 appearance-none",
          error
            ? "border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-slate-300 dark:border-slate-500 hover:border-sky-500 dark:hover:border-sky-500  focus:ring-sky-500 focus:border-sky-500",
          value
            ? "text-slate-900 dark:text-slate-50"
            : error
            ? "text-red-500"
            : "text-slate-400",
          "disabled:text-slate-300 disabled:bg-slate-100 disabled:border-slate-300"
        )}
        value={value}
        {...other}
      />
      <ChevronDownIcon
        className={clsx(
          "h-6 w-6 absolute right-2 inset-y-2 pointer-events-none",
          error ? "text-red-500" : "text-slate-500"
        )}
      />
    </span>
    {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
  </label>
);

export const FormikSelectField = ({
  field,
  form,
  disabled,
  ...other
}: SelectFieldProps & FieldProps & ComponentPropsWithoutRef<"select">) => {
  return (
    <SelectField
      {...field}
      {...other}
      error={
        form.touched[field.name] && form.errors[field.name]
          ? form.errors[field.name]
          : undefined
      }
      disabled={disabled || form.isSubmitting}
    />
  );
};
