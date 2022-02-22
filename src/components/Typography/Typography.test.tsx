import { render, screen } from "@testing-library/react";
import { Typography } from ".";

it("renders", () => {
  render(<Typography>Typography</Typography>);
  expect(screen.getByText(/typography/i)).toBeInTheDocument();
});

it("renders as a custom component", () => {
  render(<Typography component="h1">Typography</Typography>);
  expect(
    screen.getByRole("heading", { name: /typography/i, level: 1 })
  ).toBeInTheDocument();
});

it("supports className", () => {
  render(<Typography className="foo">Typography</Typography>);
  expect(screen.getByText(/typography/i)).toHaveClass("foo");
});
