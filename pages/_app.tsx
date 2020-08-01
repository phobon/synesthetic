import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@phobon/base';
import { MDXProvider } from '@mdx-js/react';
import { AnimatePresence } from 'framer-motion';

const components = {
  // Map components as required here. Move this to local state to update
  // at runtime, which may not really be needed
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;