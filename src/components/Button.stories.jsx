import React from 'react';
import Button from './Button';
import { MantineProvider } from '@mantine/core';

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Story />
      </MantineProvider>
    ),
  ],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  color: 'blue',
};
