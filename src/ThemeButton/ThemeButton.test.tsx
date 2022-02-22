import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IntlProvider } from "react-intl";
import { ThemeButton } from ".";

it("renders", () => {
  render(
    <IntlProvider locale="en">
      <ThemeButton />
    </IntlProvider>
  );
  const button = screen.getByRole("button", {
    name: /toggle light\/dark mode/i,
  });
  // Check the document class
  expect(document.documentElement).not.toHaveClass("dark");
  // Dark
  userEvent.click(button);
  expect(document.documentElement).toHaveClass("dark");
  // Light
  userEvent.click(button);
  expect(document.documentElement).not.toHaveClass("dark");
});
