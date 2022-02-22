import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchField } from "./SearchField";

export default {
  title: "Vehicles/SearchField",
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => (
  <SearchField {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  value: "",
};

export const Value = Template.bind({});
Value.args = {
  value: "Text",
};

export const Controlled = () => {
  const [value, setValue] = useState("");
  return (
    <SearchField
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onClear={() => setValue("")}
    />
  );
};
