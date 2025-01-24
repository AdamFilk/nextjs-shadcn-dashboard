import UIButton from '@/components/shared/buttons';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { GoogleIcon } from '@/components/shared/icons/social-icons';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Buttons/Button',
  component: UIButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    text: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof UIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    text: 'Button',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    text: 'Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    text: 'Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    text: 'Button',
    variant: 'link',
  },
};
export const Loading: Story = {
  args: {
    text: 'Button',
    loading: true,
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Button',
    icon: React.createElement(GoogleIcon),
  },
};
