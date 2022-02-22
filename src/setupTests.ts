import "@testing-library/jest-dom";
import "whatwg-fetch";
import { setGlobalConfig } from "@storybook/testing-react";
import { getWorker } from "msw-storybook-addon";
import * as globalStorybookConfig from "../.storybook/preview";

Object.defineProperty(window, "scrollTo", { value: () => {}, writable: true });
setGlobalConfig(globalStorybookConfig);

// @ts-ignore
afterAll(() => getWorker().close());
