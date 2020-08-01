import { addDecorator, configure } from '@storybook/react';
import { theme, Box } from '@phobon/base';
import { ThemeProvider } from 'styled-components';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Box
      className="storybox"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      justifyContent="flex-start"
      alignItems="flex-start"
      fullWidth>
      {story()}
    </Box>
  </ThemeProvider>
));
configure(require.context('../components/', true, /\.stories\.js$/), module);