import { render, screen } from "@testing-library/react";
import { TextField } from ".";

it("renders", () => {
  render(<TextField label="Label" defaultValue="test" />);
  expect(screen.getByRole("textbox", { name: /label/i })).toHaveValue("test");
});

it("renders an error", () => {
  render(<TextField label="Label" defaultValue="test" error="An error" />);
  expect(screen.getByText(/an error/i)).toBeInTheDocument();
});
