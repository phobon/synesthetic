import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@phobon/base";
import { MDXProvider } from "@mdx-js/react";
import { AnimatePresence } from "framer-motion";
import { Provider } from "jotai";

import { Layout } from "@/components/Layout";

const components = {
  // Map components as required here. Move this to local state to update
  // at runtime, which may not really be needed
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Provider>
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} />
            </AnimatePresence>
          </Layout>
        </Provider>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default App;
