import { styled } from '~design'

export const Box = styled('div', {
  display: 'flex',
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  minWidth: 0,
  color: '$foreground',
})

Box.displayName = 'Box'
