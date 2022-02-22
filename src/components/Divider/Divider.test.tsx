import { render, screen } from "@testing-library/react";
import { Divider } from ".";

it("renders", () => {
  render(<Divider />);
  expect(screen.getByRole("separator")).toBeInTheDocument();
});
