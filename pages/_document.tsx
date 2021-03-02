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

  const originalRenderPage = ctx.renderPage

  try {
    const stitchesCss = getCssString()
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} />,
      })

    const initialProps = await NextDocument.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          <style>{globalStyles.toString()}</style>
          <style>{stitchesCss}</style>
          {initialProps.styles}
        </>
      ),
    }
  } finally {
    // Do something
  }
}
