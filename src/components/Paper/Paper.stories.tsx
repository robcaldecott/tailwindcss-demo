import { ComponentMeta } from "@storybook/react";
import { Typography } from "../Typography";
import { Paper } from ".";

export default {
  title: "Components/Paper",
  component: Paper,
} as ComponentMeta<typeof Paper>;

export const Default = () => (
  <Paper className="p-4">
    <Typography variant="h4">Paper</Typography>
  </Paper>
);
