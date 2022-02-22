const path = require("path");

module.exports = {
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: { backgrounds: false },
    },
    "storybook-dark-mode",
    "@storybook/addon-interactions",
    "storybook-addon-intl",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require("postcss"),
        },
      },
    },
  ],
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  features: {
    interactionsDebugger: true,
    storyStoreV7: true,
  },
  staticDirs: ["../public"],
  framework: "@storybook/react",
  reactOptions: {
    fastRefresh: true,
  },
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, "formatjs"],
  }),
  webpackFinal: (config) => {
    config.resolve.alias["@/components"] = path.join(
      __dirname,
      "../src/components"
    );
    return config;
  },
};
