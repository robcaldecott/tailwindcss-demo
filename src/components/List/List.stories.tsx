import { ComponentMeta } from "@storybook/react";
import { Paper } from "../Paper";
import { List, ListItem, ListItemText } from ".";

export default {
  title: "Components/List",
} as ComponentMeta<typeof List>;

const data = [
  {
    primary: "The quick brown fox jumps over the lazy dog.",
    secondary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    primary:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    secondary:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const Static = () => (
  <Paper>
    <List dividers>
      {data.map(({ primary, secondary }, index) => (
        <ListItem key={index}>
          <ListItemText primary={primary} secondary={secondary} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export const Buttons = () => (
  <Paper>
    <List dividers>
      {data.map(({ primary, secondary }, index) => (
        <ListItem key={index} button component="button">
          <ListItemText primary={primary} secondary={secondary} />
        </ListItem>
      ))}
    </List>
  </Paper>
);
