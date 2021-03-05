import React, { useEffect } from 'react'
import { AppProps } from 'next/app'

import { Layout } from '~components/Layout'
import { globalStyles } from '~design/globalStyles'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyles()
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
