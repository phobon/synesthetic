import { CSS, config, styled, css } from '~design'

// Generate 'boxShadow' prop values from theme config
const { shadows } = config.theme
type ShadowKey = keyof typeof config.theme.shadows

const boxShadow = Object.keys(shadows).reduce(
  (acc, space) => ({
    ...acc,
    [space]: { $$cardShadow: `$shadows$${space}` },
  }),
  {}
) as { [key in ShadowKey]: any }

const cardStyles: CSS = {
  $$cardShadow: 'initial',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$backgroundSecondary',
  borderRadius: '$3',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 'inherit',
    width: '100%',
    height: '100%',
    boxShadow: '$$cardShadow',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      auto: {
        width: 'initial',
        height: 'initial',
      },
      fluid: {
        width: '100%',
        height: '100%',
      },
    },
    boxShadow,
  },
  defaultVariants: {
    boxShadow: '2',
    size: 'auto',
  },
}

export const card = css(cardStyles)
export const Card = styled('section', cardStyles)

export type CardProps = React.ComponentProps<typeof Card>
