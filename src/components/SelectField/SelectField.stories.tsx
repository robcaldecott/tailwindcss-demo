import { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { SelectField } from "./SelectField";

export default {
  title: "Components/SelectField",
  component: SelectField,
} as ComponentMeta<typeof SelectField>;

export const Controlled = () => {
  const [value, setValue] = useState("");
  return (
    <SelectField
      label="Enter some text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Placeholder"
    >
      <option value="apples">Apples</option>
      <option value="bananas">Bananas</option>
      <option value="oranges">Oranges</option>
    </SelectField>
  );
};

export const Error = () => {
  const [value, setValue] = useState("");
  return (
    <SelectField
      label="Enter some text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Placeholder"
      error={value === "" ? "Please select a fruit" : undefined}
    >
      <option value="">Select a fruit</option>
      <option value="apples">Apples</option>
      <option value="bananas">Bananas</option>
      <option value="oranges">Oranges</option>
    </SelectField>
  );
};
