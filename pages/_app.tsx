import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@phobon/tokens'

import { Layout } from '@/components/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
