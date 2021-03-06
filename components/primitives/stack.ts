import { css, config, styled } from '~design'

const CHILD_SELECTOR = '> *'
const CHILD_WITH_GAP_SELECTOR = '> * + *'

// Generate 'gap' prop values from theme config
const { space } = config.theme
type SpaceKey = keyof typeof config.theme.space

const gap = Object.keys(space).reduce(
  (acc, space) => ({
    ...acc,
    [space]: { [CHILD_WITH_GAP_SELECTOR]: { $$stackGap: `$space$${space}` } },
  }),
  {}
) as { [key in SpaceKey]: any }

const stackStyles: any = {
  display: 'flex',
  listStyleType: 'none',
  paddingLeft: 0,
  [CHILD_SELECTOR]: {
    margin: 0,
  },
  [CHILD_WITH_GAP_SELECTOR]: {
    $$stackGapLeft: 'initial',
    $$stackGapRight: 'initial',
    $$stackGapTop: 'initial',
    marginLeft: '$$stackGapLeft',
    marginTop: '$$stackGapTop',
    marginRight: '$$stackGapRight',
  },
}

export const stack = css({
  ...stackStyles,
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        [CHILD_WITH_GAP_SELECTOR]: {
          $$stackGapLeft: '$$stackGap',
        },
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        [CHILD_WITH_GAP_SELECTOR]: {
          $$stackGapRight: '$$stackGap',
        },
      },
      column: {
        flexDirection: 'column',
        [CHILD_WITH_GAP_SELECTOR]: {
          $$stackGapTop: '$$stackGap',
        },
      },
    },
    gap,
  },
  defaultVariants: {
    gap: 0,
    direction: 'column',
  },
})
export const Stack = styled('div', {
  display: 'flex',
  listStyleType: 'none',
  paddingLeft: 0,
  [CHILD_SELECTOR]: {
    margin: 0,
  },
  [CHILD_WITH_GAP_SELECTOR]: {
    $$stackGapLeft: 'initial',
    $$stackGapRight: 'initial',
    $$stackGapTop: 'initial',
    marginLeft: '$$stackGapLeft',
    marginTop: '$$stackGapTop',
    marginRight: '$$stackGapRight',
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        [CHILD_WITH_GAP_SELECTOR]: {
          $$stackGapLeft: '$$stackGap',
        },
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        [CHILD_WITH_GAP_SELECTOR]: {
          $$stackGapRight: '$$stackGap',
        },
      },
      column: {
        flexDirection: 'column',
        [CHILD_WITH_GAP_SELECTOR]: {
          $$stackGapTop: '$$stackGap',
        },
      },
    },
    gap,
  },
  defaultVariants: {
    gap: 0,
    direction: 'column',
  },
})

export type StackProps = {
  gap?: SpaceKey
  direction?: 'row' | 'column'
} & React.ComponentProps<typeof Stack>
