import { styled } from '~design'

export const Stack = styled('div', {
  $$space: '$space$0',
  display: 'flex',
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  minWidth: 0,
  color: '$foreground',
  '> * + *': {
    marginTop: '$$space',
  },
  variants: {
    space: {
      0: { $$space: '$space$0' },
    },
  },
})

Stack.displayName = 'Stack'
