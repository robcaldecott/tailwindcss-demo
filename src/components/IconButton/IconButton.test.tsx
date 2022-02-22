import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StarIcon } from "@heroicons/react/solid";
import { IconButton } from ".";

it("renders", () => {
  const handleClick = vi.fn();
  render(
    <IconButton onClick={handleClick}>
      <StarIcon />
    </IconButton>
  );
  expect(screen.getByRole("button")).toBeInTheDocument();
  userEvent.click(screen.getByRole("button"));
  expect(handleClick).toHaveBeenCalled();
});

it("renders as a custom component", () => {
  render(
    <IconButton component="a" href="#">
      <StarIcon />
    </IconButton>
  );
  expect(screen.getByRole("link")).toBeInTheDocument();
});
