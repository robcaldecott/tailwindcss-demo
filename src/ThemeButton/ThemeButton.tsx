import { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { IconButton } from "@/components";
import type { IconButtonProps } from "@/components";

const isDark = () => document.documentElement.classList.contains("dark");

export const ThemeButton = (props: IconButtonProps<"button">) => {
  const intl = useIntl();
  const [dark, setDark] = useState(isDark());
  useEffect(() => {
    const currentlyDark = isDark();
    if (dark && !currentlyDark) {
      document.documentElement.classList.add("dark");
    } else if (!dark && currentlyDark) {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <IconButton
      title={intl.formatMessage({
        defaultMessage: "Toggle light/dark mode",
        description: "Switch between colour modes",
      })}
      onClick={() => {
        setDark((dark) => !dark);
      }}
      {...props}
    >
      {dark ? (
        <SunIcon className="text-yellow-400 hover:text-yellow-100 h-6 w-6" />
      ) : (
        <MoonIcon className="text-cyan-400 hover:text-cyan-100 h-6 w-6" />
      )}
    </IconButton>
  );
};
