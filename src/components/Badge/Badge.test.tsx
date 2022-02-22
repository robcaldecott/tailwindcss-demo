import { render, screen } from "@testing-library/react";
import { Badge } from ".";

it("renders", () => {
  render(<Badge>123</Badge>);
  expect(screen.getByText("123")).toBeInTheDocument();
});
