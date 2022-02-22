/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    react({
      babel: {
        plugins: ["formatjs"],
      },
    }),
    visualizer(),
  ],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./src/components"),
    },
  },
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      exclude: [
        "**/*.test.tsx",
        ".storybook",
        "**/*.stories.tsx",
        "src/setup*.ts",
        "*.config.*",
      ],
    },
  },
});
