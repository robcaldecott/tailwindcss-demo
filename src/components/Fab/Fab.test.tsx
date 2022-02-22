import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StarIcon } from "@heroicons/react/solid";
import { Fab } from ".";

it("renders as a button", () => {
  const handleClick = vi.fn();
  render(
    <Fab onClick={handleClick} aria-label="fab">
      <StarIcon />
    </Fab>
  );
  userEvent.click(screen.getByRole("button", { name: /fab/i }));
  expect(handleClick).toHaveBeenCalled();
});

it("renders as a link", () => {
  render(
    <Fab component="a" href="#" aria-label="fab">
      <StarIcon />
    </Fab>
  );
  expect(screen.getByRole("link", { name: /fab/i })).toBeInTheDocument();
});
