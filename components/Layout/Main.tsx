import styled from '@emotion/styled'
import {
  compose,
  space,
  color,
  layout,
  grid,
  SpaceProps,
  ColorProps,
  LayoutProps,
  GridProps,
} from 'styled-system'
import {
  fullWidth,
  fullHeight,
  FullWidthProps,
  FullHeightProps,
} from '@phobon/base'

type MainProps = SpaceProps &
  ColorProps &
  LayoutProps &
  GridProps &
  FullWidthProps &
  FullHeightProps

const mainSystem = compose(space, color, layout, grid, fullWidth, fullHeight)

export const Main = styled('main')<MainProps>(
  {
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    gridArea: 'main',
  },
  mainSystem
)

Main.displayName = 'Main'
