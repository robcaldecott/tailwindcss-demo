import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { rest } from "msw";
import { MemoryRouter, Route, Routes, Link } from "react-router-dom";
import { Button, Typography } from "@/components";
import { Create } from ".";

export default {
  title: "Create",
  component: Create,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/", "/create"]} initialIndex={1}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Typography variant="h4" component="h1" gutterBottom>
                  Home
                </Typography>
                <Button variant="contained" component={Link} to="/create">
                  Create
                </Button>
              </>
            }
          />
          <Route path="/create" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Create>;

const Template: ComponentStory<typeof Create> = () => <Create />;

export const Empty = Template.bind({});
Empty.parameters = {
  msw: {
    handlers: [
      rest.post("/api/vehicles", (req, res, ctx) => res(ctx.json({}))),
    ],
  },
};

const fillForm = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const body = within(document.body);
  await userEvent.selectOptions(
    canvas.getByRole("combobox", { name: /make/i }),
    "Audi"
  );
  await userEvent.type(
    canvas.getByRole("textbox", { name: /model/i }),
    "Model"
  );
  await userEvent.type(
    canvas.getByRole("textbox", { name: /variant/i }),
    "Variant"
  );
  await userEvent.selectOptions(
    canvas.getByRole("combobox", { name: /fuel/i }),
    "Electric"
  );
  await userEvent.selectOptions(
    canvas.getByRole("combobox", { name: /colour/i }),
    "Black"
  );
  await userEvent.type(
    canvas.getByRole("textbox", { name: /registration number/i }),
    "REGNO"
  );
  await userEvent.type(canvas.getByRole("textbox", { name: /vin/i }), "VIN");
  await userEvent.type(
    canvas.getByRole("textbox", { name: /mileage/i }),
    "1234"
  );
  await userEvent.type(
    canvas.getByLabelText(/registration date/i),
    "2000-01-01"
  );
};

export const Filled = Template.bind({});
Filled.parameters = Empty.parameters;
Filled.play = async ({ canvasElement }) => {
  await fillForm(canvasElement);
};

export const Submit = Template.bind({});
Submit.parameters = {
  msw: {
    handlers: [
      rest.post("/api/vehicles", (req, res, ctx) => res(ctx.delay("infinite"))),
    ],
  },
};
Submit.play = async ({ canvasElement }) => {
  await fillForm(canvasElement);
  // Submit
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button", { name: /create/i }));
};

export const InvalidMileage = Template.bind({});
InvalidMileage.play = async (context) => {
  const canvas = within(context.canvasElement);
  await userEvent.type(
    canvas.getByRole("textbox", { name: /mileage/i }),
    "abc"
  );
  await userEvent.tab();
  await canvas.findByText(/please enter a valid mileage/i);
};
