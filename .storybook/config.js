import { addDecorator, configure } from "@storybook/react";
import { Box } from "@phobon/base";
import { theme } from "@phobon/tokens";
import { ThemeProvider } from "@emotion/react";

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <Box
      className="storybox"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      justifyContent="flex-start"
      alignItems="flex-start"
      fullWidth
    >
      {story()}
    </Box>
  </ThemeProvider>
));

configure(require.context("../components", true, /\.stories\.tsx$/), module);
