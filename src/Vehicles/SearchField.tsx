import { ChangeEvent } from "react";
import { useIntl } from "react-intl";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import clsx from "clsx";

interface SearchFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  className?: string;
}

const SearchField = ({
  value,
  onChange,
  onClear,
  className,
}: SearchFieldProps) => {
  const intl = useIntl();
  const disabled = value === "";

  return (
    <div className={clsx("relative", className)}>
      <label className="block relative">
        <span className="sr-only">
          {intl.formatMessage({
            defaultMessage: "Search",
            description: "Label for the search field",
          })}
        </span>

        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <SearchIcon className="h-6 w-6 text-slate-300 dark:text-slate-500" />
        </span>

        <input
          className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white w-full pl-10 py-2 pr-8 rounded-2xl border border-slate-300 hover:border-indigo-500 dark:hover:border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 font-sans text-base outline-none"
          value={value}
          onChange={onChange}
          placeholder={intl.formatMessage({
            defaultMessage: "Search",
            description: "Label for the search field",
          })}
        />
      </label>

      <span className="absolute inset-y-0 right-2 flex items-center">
        <button
          className={clsx(
            "rounded-full p-1",
            disabled
              ? "text-slate-300 dark:text-slate-500"
              : "hover:bg-slate-200 dark:hover:bg-slate-500 text-slate-500 dark:text-slate-300 hover:text-slate-900 outline-none focus-visible:bg-slate-200 focus-visible:dark:bg-slate-500"
          )}
          disabled={disabled}
          title={
            disabled
              ? undefined
              : intl.formatMessage({
                  defaultMessage: "Clear",
                  description: "Clear the search",
                })
          }
          onClick={onClear}
        >
          <XIcon className={clsx("h-6 w-6 text-inherit")} />
        </button>
      </span>
    </div>
  );
};

export { SearchField };
