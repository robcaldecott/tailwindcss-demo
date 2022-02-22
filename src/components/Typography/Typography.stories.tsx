import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography } from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Typography",
};
