import { ReactNode } from "react";
import { ComponentPropsWithoutRef } from "react";
import { FieldProps } from "formik";
import clsx from "clsx";

interface TextFieldProps {
  label: ReactNode;
  error?: ReactNode;
}

export const TextField = ({
  className,
  label,
  error,
  required,
  disabled,
  ...other
}: TextFieldProps & ComponentPropsWithoutRef<"input">) => (
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
    <input
      className={clsx(
        "bg-white dark:bg-slate-900 rounded-md block w-full mt-1 p-2 font-sans text-base text-slate-900 dark:text-slate-50 outline-none placeholder:text-slate-400 border focus:outline-none focus:ring-1",
        error
          ? "border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-red-500"
          : "border-slate-300 hover:border-sky-500 dark:border-slate-500 hover:dark:border-sky-500 focus:ring-sky-500 focus:border-sky-500",
        "disabled:text-slate-300 disabled:bg-slate-100 disabled:border-slate-300"
      )}
      disabled={disabled}
      {...other}
    />
    {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
  </label>
);

export const FormikTextField = ({
  field,
  form,
  disabled,
  ...other
}: TextFieldProps & FieldProps & ComponentPropsWithoutRef<"input">) => {
  return (
    <TextField
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
