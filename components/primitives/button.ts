import { styled } from '~design'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 120ms ease-out',
  userSelect: 'none',

  $$buttonSize: '$space$5',
  $$buttonBorder: '$colors$grey300',
  $$buttonBorderRadius: '6px',
  $$buttonBg: '$colors$grey300',
  $$buttonColor: '$colors$grey900',
  $$buttonPadding: '$space$2',

  paddingLeft: '$$buttonPadding',
  paddingRight: '$$buttonPadding',
  minHeight: '$$buttonSize',
  border: '1px solid $$buttonBorder',
  borderRadius: '$$buttonBorderRadius',
  backgroundColor: '$$buttonBg',
  color: '$$buttonColor',
  fill: '$$buttonColor',
  stroke: '$$buttonColor',

  '&:hover': {
    $$buttonBorder: '$colors$grey200',
    $$buttonBg: '$colors$grey200',
  },

  '&[aria-pressed="true"]': {
    $$buttonBg: '$colors$grey800',
    $$buttonColor: '$colors$grey50',
  },
  '&[aria-pressed="true"]:hover': {
    $$buttonBg: '$colors$grey700',
  },

  '&:disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
    $$buttonBorder: 'transparent',
  },

  variants: {
    variant: {
      primary: {
        $$buttonBg: '$colors$accent500',
        $$buttonColor: '$colors$accent50',
        $$buttonBorder: '$colors$accent500',
        '&:hover': {
          $$buttonBg: '$colors$accent600',
          $$buttonBorder: '$colors$accent600',
        },
        '&[aria-pressed="true"]': {
          $$buttonBg: '$colors$accent700',
          $$buttonColor: '$colors$accent50',
          $$buttonBorder: '$colors$accent700',
        },
        '&[aria-pressed="true"]:hover': {
          $$buttonBg: '$colors$accent600',
          $$buttonBorder: '$colors$accent600',
        },
      },
      secondary: {},
      tertiary: {
        $$buttonBg: 'transparent',
        $$buttonColor: '$colors$grey900',
        $$buttonBorder: 'transparent',
        '&:hover': {
          $$buttonBg: '$colors$grey200',
          $$buttonBorder: '$colors$grey200',
        },
        '&[aria-pressed="true"]': {
          $$buttonBg: '$colors$grey800',
          $$buttonColor: '$colors$accent50',
          $$buttonBorder: 'inherit',
        },
        '&[aria-pressed="true"]:hover': {
          $$buttonBg: '$colors$grey700',
          $$buttonBorder: '$colors$grey700',
        },
      },
      danger: {
        $$buttonBg: '$colors$red100',
        $$buttonColor: '$colors$red900',
        $$buttonBorder: '$colors$red100',
        '&:hover': {
          $$buttonBg: '$colors$red200',
          $$buttonBorder: '$colors$red200',
        },
        '&[aria-pressed="true"]': {
          $$buttonBg: '$colors$red300',
          $$buttonColor: '$colors$red900',
          $$buttonBorder: '$colors$red300',
        },
        '&[aria-pressed="true"]:hover': {
          $$buttonBg: '$colors$red200',
          $$buttonBorder: '$colors$red200',
        },
      },
      success: {
        $$buttonBg: '$colors$green100',
        $$buttonColor: '$colors$green900',
        $$buttonBorder: '$colors$green100',
        '&:hover': {
          $$buttonBg: '$colors$green200',
          $$buttonBorder: '$colors$green200',
        },
        '&[aria-pressed="true"]': {
          $$buttonBg: '$colors$green300',
          $$buttonColor: '$colors$green900',
          $$buttonBorder: '$colors$green300',
        },
        '&[aria-pressed="true"]:hover': {
          $$buttonBg: '$colors$green200',
          $$buttonBorder: '$colors$green200',
        },
      },
      info: {
        $$buttonBg: '$colors$blue100',
        $$buttonColor: '$colors$blue900',
        $$buttonBorder: '$colors$blue100',
        '&:hover': {
          $$buttonBg: '$colors$blue200',
          $$buttonBorder: '$colors$blue200',
        },
        '&[aria-pressed="true"]': {
          $$buttonBg: '$colors$blue300',
          $$buttonColor: '$colors$blue900',
          $$buttonBorder: '$colors$blue300',
        },
        '&[aria-pressed="true"]:hover': {
          $$buttonBg: '$colors$blue200',
          $$buttonBorder: '$colors$blue200',
        },
      },
      warning: {
        $$buttonBg: '$colors$orange100',
        $$buttonColor: '$colors$orange900',
        $$buttonBorder: '$colors$orange100',
        '&:hover': {
          $$buttonBg: '$colors$orange200',
          $$buttonBorder: '$colors$orange200',
        },
        '&[aria-pressed="true"]': {
          $$buttonBg: '$colors$orange300',
          $$buttonColor: '$colors$orange900',
          $$buttonBorder: '$colors$orange300',
        },
        '&[aria-pressed="true"]:hover': {
          $$buttonBg: '$colors$orange200',
          $$buttonBorder: '$colors$orange200',
        },
      },
      clean: {
        $$buttonBorder: 'transparent',
        $$buttonSize: 'unset',
        $$buttonBorderRadius: '2px',
        '&:hover': {
          $$buttonBorder: '$colors$grey400',
        },
        '&[aria-pressed="true"]': {
          $$buttonBg: '$colors$grey800',
          $$buttonColor: '$colors$grey50',
        },
        '&[aria-pressed="true"]:hover': {
          $$buttonBg: '$colors$grey700',
        },
      },
      blank: {
        $$buttonBg: 'none',
        borderColor: 'transparent',
        '&:hover': {
          borderColor: '$grey300',
        },
      },
    },
    toggled: {
      true: {
        $$buttonBg: '$colors$grey800',
        $$buttonColor: '$colors$grey50',

        '&:hover': {
          $$buttonBg: '$colors$grey700',
        },
      },
    },
    shape: {
      default: {},
      square: {
        $$buttonPadding: 0,
        minWidth: '$$buttonSize',
      },
      circle: {
        $$buttonPadding: 0,
        $$buttonBorderRadius: '50%',
      },
    },
    size: {
      small: {
        $$buttonSize: '$space$4',
      },
      medium: {
        $$buttonSize: '$space$5',
      },
      large: {
        $$buttonSize: '$space$6',
      },
      fluid: {
        $$buttonSize: '100%',
        minWidth: '$$buttonSize',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      toggled: 'true',
      css: {
        $$buttonBg: '$colors$accent700',
        $$buttonColor: '$colors$accent50',
        $$buttonBorder: '$colors$accent700',
        '&:hover': {
          $$buttonBg: '$colors$accent600',
          $$buttonBorder: '$colors$accent600',
        },
      },
    },
    {
      variant: 'tertiary',
      toggled: 'true',
      css: {
        $$buttonBg: '$colors$grey800',
        $$buttonColor: '$colors$grey50',
        $$buttonBorder: 'inherit',
        '&:hover': {
          $$buttonBg: '$colors$grey700',
          $$buttonBorder: '$colors$grey700',
        },
      },
    },
    {
      variant: 'success',
      toggled: 'true',
      css: {
        $$buttonBg: '$colors$green300',
        $$buttonColor: '$colors$green900',
        '&:hover': {
          $$buttonBg: '$colors$green200',
          $$buttonBorder: '$colors$green200',
        },
      },
    },
    {
      variant: 'danger',
      toggled: 'true',
      css: {
        $$buttonBg: '$colors$red700',
        $$buttonColor: '$colors$red50',
        $$buttonBorder: '$colors$green300',
        '&:hover': {
          $$buttonBg: '$colors$red600',
          $$buttonBorder: '$colors$red600',
        },
      },
    },
    {
      variant: 'warning',
      toggled: 'true',
      css: {
        $$buttonBg: '$colors$orange300',
        $$buttonColor: '$colors$orange900',
        $$buttonBorder: '$colors$orange300',
        '&:hover': {
          $$buttonBg: '$colors$orange200',
          $$buttonBorder: '$colors$orange200',
        },
      },
    },
    {
      variant: 'info',
      toggled: 'true',
      css: {
        $$buttonBg: '$colors$blue300',
        $$buttonColor: '$colors$blue900',
        $$buttonBorder: '$colors$blue300',
        '&:hover': {
          $$buttonBg: '$colors$blue200',
          $$buttonBorder: '$colors$blue200',
        },
      },
    },
    {
      variant: 'clean',
      toggled: 'true',
      css: {
        $$buttonBg: '$colors$grey800',
        $$buttonColor: '$colors$grey50',
        '&:hover': {
          $$buttonBg: '$colors$grey700',
        },
      },
    },
  ],
})

Button.displayName = 'Button'
