import { CSS, css, styled } from '~design'

const spacerStyles: CSS = {
  backgroundColor: '$grey100',
  height: '2px',
  width: '80%',
  display: 'block',
  minWidth: 0,
}

export const spacer = css(spacerStyles)
export const Spacer = styled('span', spacerStyles)

Spacer.displayName = 'Spacer'
