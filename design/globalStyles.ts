import { globalCss } from '~design'

export const globalStyles = globalCss({
  ':root, body': {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    fontSize: 8,
  },
  body: {
    fontFamily: '$default',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 1.43,
  },
  '*, ::before, ::after': {
    boxSizing: 'border-box',
  },
  'a, a:hover, a:visited': {
    textDecoration: 'none',
  },
  ul: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  'code, kbd': {
    fontFamily: '$monospace',
  },
  template: {
    display: 'none',
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section': {
    display: 'block',
  },
  'html, body, p, div, h1, h2, h3, h4, h5, h6, ul, ol, dl, img, pre, form, fieldset': {
    margin: 0,
    padding: 0,
  },
  'img, fieldset': {
    border: 0,
  },
  figure: {
    margin: 0,
  },
  '#__next': {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
    backgroundColor: 'var(--c-background)',
    overflowX: 'hidden',
  },
})
