import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MoonIcon } from "@heroicons/react/solid";
import { AppBar } from "./AppBar";
import { Typography } from "../Typography";
import { IconButton } from "../IconButton";

export default {
  title: "Components/AppBar",
  component: AppBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Typography
        component="h1"
        variant="h6"
        className="flex-grow"
        color="inherit"
      >
        App header
      </Typography>
      <IconButton edge="end" title="Toggle light/dark mode">
        <MoonIcon className="text-cyan-400 hover:text-cyan-100 h-6 w-6" />
      </IconButton>
    </>
  ),
};
