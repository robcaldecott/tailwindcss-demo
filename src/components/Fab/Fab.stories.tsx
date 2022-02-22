import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PlusIcon } from "@heroicons/react/solid";
import { Fab } from "./Fab";

export default {
  title: "Components/Fab",
  component: Fab,
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (args) => <Fab {...args} />;

export const Circular = Template.bind({});
Circular.args = {
  children: <PlusIcon className="h-6 w-6" />,
};

export const Extended = Template.bind({});
Extended.args = {
  variant: "extended",
  children: (
    <>
      <PlusIcon className="h-6 w-6 mr-2" />
      Create Vehicle
    </>
  ),
};

export const Fixed = Template.bind({});
Fixed.args = {
  className: "fixed bottom-8 right-8",
  children: <PlusIcon className="h-6 w-6" />,
};
