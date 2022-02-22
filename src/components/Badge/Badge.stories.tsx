import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const SingleDigit = Template.bind({});
SingleDigit.args = {
  children: "1",
};

export const TwoDigit = Template.bind({});
TwoDigit.args = {
  children: "99",
};
