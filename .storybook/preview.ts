import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';
import '../src/app/globals.css';

const preview: Preview = {
  decorators: [
    (Story) => {
      return React.createElement(ThemeProvider, { attribute: 'class' }, React.createElement(Story));
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
