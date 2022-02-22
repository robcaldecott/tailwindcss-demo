import { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { TextField } from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Controlled = () => {
  const [value, setValue] = useState("");
  return (
    <TextField
      type="text"
      label="Enter some text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Placeholder"
    />
  );
};

export const Error = () => {
  const [value, setValue] = useState("");
  return (
    <TextField
      id="email"
      name="email"
      type="email"
      label="Email address:"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="you@example.com"
      error="Please provide a valid email address."
    />
  );
};
