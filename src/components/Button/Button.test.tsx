import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

it("renders", () => {
  const handleClose = vi.fn();
  render(<Button onClick={handleClose}>Button</Button>);
  expect(screen.getByRole("button", { name: /button/i })).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: /button/i }));
  expect(handleClose).toHaveBeenCalled();
});

it("renders as a link", () => {
  render(
    <Button component="a" href="#">
      Button
    </Button>
  );
  expect(screen.getByRole("link", { name: /button/i })).toBeInTheDocument();
});
