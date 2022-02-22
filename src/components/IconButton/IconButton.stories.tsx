import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StarIcon } from "@heroicons/react/solid";
import { IconButton } from ".";

export default {
  title: "Components/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <StarIcon className="h-5 w-5 text-sky-500" />,
};
