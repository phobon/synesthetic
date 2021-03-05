import { styled } from '~design'

const sharedStyles: any = {
  $$space: '$space$0',
  display: 'flex',
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  minWidth: 0,
  color: '$foreground',
  variants: {
    space: {
      0: { $$space: '$space$0' },
    },
  },
}

export const VStack = styled('div', {
  ...sharedStyles,
  flexDirection: 'column',
  '> * + *': {
    marginTop: '$$space',
  },
})

VStack.displayName = 'VStack'

export const HStack = styled('div', {
  ...sharedStyles,
  '> * + *': {
    marginLeft: '$$space',
  },
})

HStack.displayName = 'HStack'
