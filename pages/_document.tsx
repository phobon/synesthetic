import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssString } from '~design'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <style
            id='__stitches'
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
