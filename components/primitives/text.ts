import { CSS, css, styled } from '~design'

const textStyles: CSS = {
  boxSizing: 'border-box',
  display: 'block',
  minWidth: 0,
  color: '$foreground',
  fontSize: '$1',
  textAlign: 'left',
  lineHeight: '$normal',
}

export const text = css(textStyles)
export const Text = styled('p', textStyles)

Text.displayName = 'Text'
