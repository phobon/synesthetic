import React from 'react'
import NextDocument from 'next/document'

import { getCssString } from '~design'
import { globalStyles } from '~design/globalStyles'

export default class Document extends NextDocument {}

Document.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  try {
    const initialProps = await NextDocument.getInitialProps(ctx)
    globalStyles()

    return {
      ...initialProps,
      styles: (
        <>
          <style id='__stitchesstyles'>{getCssString()}</style>
          {initialProps.styles}
        </>
      ),
    }
  } finally {
    // Do something
  }
}
