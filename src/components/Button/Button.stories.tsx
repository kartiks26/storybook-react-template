import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
};
export const Secondary: Story = {
  args: {
    label: "Button",
  },
};
export const AfterIconButton: Story = {
  args: {
    label: "Button",
    afterIcon: "src/assets/react.svg",
  },
};
export const BeforeIconButton: Story = {
  args: {
    label: "Button",
    beforeIcon: "src/assets/react.svg",
  },
};
export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};
export const fullWidth: Story = {
  args: {
    size: "large",
    label: "Button",
    fullWidth: true,
  },
};
// export const PrimaryFullWidth: Story = {
//   args: {
//     variant: "primary",
//     size: "large",
//     label: "Sign Up",
//     fullWidth: true,
//   },
// };

export const success: Story = {
  args: {
    variant: "success",
    size: "large",
    label: "Connected",
    fullWidth: false,
  },
};
export const danger: Story = {
  args: {
    variant: "danger",
    size: "large",
    label: "Delete Account ",
    fullWidth: false,
  },
};
export const disabled: Story = {
  args: {
    variant: "disabled",
    size: "large",
    label: "Change Password",
    fullWidth: false,
  },
};
