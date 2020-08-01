import React, { FunctionComponent } from 'react';
import { Stack, Text } from '@phobon/base';

interface ExampleProps {
  text?: string;
}

const Example: FunctionComponent<ExampleProps> = ({ text, children, ...props }) => (
  <Stack {...props}>
    <Text>{text}</Text>
    {children}
  </Stack>
);

export default Example;