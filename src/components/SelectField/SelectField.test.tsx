import { render, screen } from "@testing-library/react";
import { SelectField } from ".";

it("renders", () => {
  render(
    <SelectField label="Label">
      <option value="a">A</option>
      <option value="b">B</option>
    </SelectField>
  );
  expect(screen.getByRole("combobox", { name: /label/i })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "A" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "B" })).toBeInTheDocument();
});

it("renders with an error", () => {
  render(
    <SelectField label="Label" error="An error">
      <option value="a">A</option>
      <option value="b">B</option>
    </SelectField>
  );
  expect(screen.getByText(/an error/i)).toBeInTheDocument();
});
