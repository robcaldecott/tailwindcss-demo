import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Create.stories";

const { Filled, Empty, InvalidMileage } = composeStories(stories);

it("creates a new user", async () => {
  const { container } = render(<Filled />);
  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /create new vehicle/i })
  ).toBeInTheDocument();
  // Fill in the form
  await act(async () => {
    await Filled.play({ canvasElement: container });
  });

  // Submit the form
  userEvent.click(screen.getByRole("button", { name: /create/i }));

  // Fields should be disabled
  expect(screen.getByRole("combobox", { name: /make/i })).toBeDisabled();
  expect(screen.getByRole("textbox", { name: /model/i })).toBeDisabled();
  expect(screen.getByRole("textbox", { name: /variant/i })).toBeDisabled();
  expect(screen.getByRole("combobox", { name: /fuel/i })).toBeDisabled();
  expect(screen.getByRole("combobox", { name: /colour/i })).toBeDisabled();
  expect(
    screen.getByRole("textbox", { name: /registration number/i })
  ).toBeDisabled();
  expect(screen.getByRole("textbox", { name: /vin/i })).toBeDisabled();
  expect(screen.getByRole("textbox", { name: /mileage/i })).toBeDisabled();
  expect(screen.getByLabelText(/registration date/i)).toBeDisabled();

  // Buttons should be disabled
  expect(screen.getByRole("button", { name: /create/i })).toBeDisabled();
  expect(screen.getByRole("button", { name: /cancel/i })).toBeDisabled();
  expect(screen.getByRole("button", { name: /reset/i })).toBeDisabled();

  // Home page should load
  expect(
    await screen.findByRole("heading", { name: /home/i, level: 1 })
  ).toBeInTheDocument();
});

it("validates the fields", async () => {
  render(<Empty />);
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    userEvent.click(screen.getByRole("button", { name: /create/i }));
  });
  // Check the validation messages
  expect(screen.getByText(/please select a make/i)).toBeInTheDocument();
  expect(screen.getByText(/please enter the model/i)).toBeInTheDocument();
  expect(screen.getByText(/please enter the variant/i)).toBeInTheDocument();
  expect(screen.getByText(/please select a fuel type/i)).toBeInTheDocument();
  expect(screen.getByText(/please select a colour/i)).toBeInTheDocument();
  expect(
    screen.getByText(/please enter the registration number/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/please enter the vin/i)).toBeInTheDocument();
  expect(screen.getByText(/please enter the mileage/i)).toBeInTheDocument();
  expect(
    screen.getByText(/please enter the registration date/i)
  ).toBeInTheDocument();
});

it("resets the form", async () => {
  const { container } = render(<Filled />);
  // Fill in the form
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    await Filled.play({ canvasElement: container });
    userEvent.click(screen.getByRole("button", { name: /reset/i }));
  });
  // Check fields
  expect(screen.getByRole("combobox", { name: /make/i })).toHaveValue("");
  expect(screen.getByLabelText(/model/i)).toHaveValue("");
  expect(screen.getByLabelText(/variant/i)).toHaveValue("");
  expect(screen.getByRole("combobox", { name: /fuel/i })).toHaveValue("");
  expect(screen.getByRole("combobox", { name: /colour/i })).toHaveValue("");
  expect(screen.getByLabelText(/registration number/i)).toHaveValue("");
  expect(screen.getByLabelText(/vin/i)).toHaveValue("");
  expect(screen.getByLabelText(/mileage/i)).toHaveValue("");
  expect(screen.getByLabelText(/registration date/i)).toHaveValue("");
});

it("cancels the form", async () => {
  render(<Empty />);
  userEvent.click(screen.getByRole("button", { name: /cancel/i }));
  expect(
    await screen.findByRole("heading", { name: /home/i, level: 1 })
  ).toBeInTheDocument();
});

it("handles the breadcrumbs", async () => {
  render(<Empty />);
  userEvent.click(screen.getByRole("link", { name: /home/i }));
  expect(
    await screen.findByRole("heading", { name: /home/i, level: 1 })
  ).toBeInTheDocument();
});

it("validates the mileage", async () => {
  const { container } = render(<InvalidMileage />);
  await act(async () => {
    await InvalidMileage.play({ canvasElement: container });
  });
});
