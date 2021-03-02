import { styled } from '~design'

export const Card = styled('div', {
  $$boxShadow: '$shadows$0',
  $$boxShadowIntensity: 0.5,
  display: 'flex',
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  minWidth: 0,
  position: 'relative',
  color: '$foreground',
  '&::before': {
    position: 'absolute',
    content: '""',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    boxShadow: '$$boxShadow',
    opacity: '$$boxShadowIntensity',
    left: 0,
    top: 0,
    transition: 'opacity 180ms ease-out',
  },
  variants: {
    boxShadowSize: {
      0: { $$boxShadow: '$shadows$0' },
      1: { $$boxShadow: '$shadows$1' },
      2: { $$boxShadow: '$shadows$2' },
      3: { $$boxShadow: '$shadows$3' },
      4: { $$boxShadow: '$shadows$4' },
    },
    boxShadowIntensity: {
      0: { $$boxShadowIntensity: 0 },
      25: { $$boxShadowIntensity: 0.25 },
      50: { $$boxShadowIntensity: 0.5 },
      75: { $$boxShadowIntensity: 0.75 },
      100: { $$boxShadowIntensity: 1 },
    },
  },
})

Card.displayName = 'Card'
