import { styled } from '~design'

export const Grid = styled('div', {
  display: 'grid',
  placeItems: 'center',
  boxSizing: 'border-box',
  minWidth: 0,
  color: '$foreground',
})

Grid.displayName = 'Grid'
