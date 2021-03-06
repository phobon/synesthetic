import { styled } from '~design'

export const Text = styled('p', {
  boxSizing: 'border-box',
  display: 'block',
  minWidth: 0,
  color: '$foreground',
  fontSize: '$1',
  textAlign: 'left',
  lineHeight: '$normal',
})

Text.displayName = 'Text'
