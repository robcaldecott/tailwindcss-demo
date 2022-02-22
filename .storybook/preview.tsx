import { DecoratorFn } from "@storybook/react";
import { IntlProvider } from "react-intl";
import { QueryClient, QueryClientProvider, setLogger } from "react-query";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { setIntlConfig, withIntl } from "storybook-addon-intl";
import fi from "../src/i18n/fi.json";
import "../src/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Disable `react-query` error logging
setLogger({
  error: () => {},
  log: (...params) => console.log(...params),
  warn: (...params) => console.warn(...params),
});

initialize({ onUnhandledRequest: "bypass" });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    stylePreview: true,
    current: "light",
  },
  options: {
    storySort: {
      order: ["App"],
    },
  },
};

setIntlConfig({
  locales: ["en", "fi"],
  defaultLocale: "en",
  getMessages: (locale: string) => {
    return {
      fi,
    }[locale];
  },
});

export const decorators: DecoratorFn[] = [
  withIntl,
  mswDecorator,
  (Story) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
          retry: false,
        },
      },
    });

    return (
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale="en">
          <Story />
        </IntlProvider>
      </QueryClientProvider>
    );
  },
];
