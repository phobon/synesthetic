import { StitchesCss, createCss } from '@stitches/react'

const stitchesConfig = createCss({
  prefix: '',
  theme: {
    colors: {
      grey50: '#F9F9F9',
      grey100: '#EAEDF0',
      grey200: '#E2E6EA',
      grey300: '#C2C8C8',
      grey400: '#A7ADB3',
      grey500: '#899197',
      grey600: '#6A7278',
      grey700: '#535D63',
      grey800: '#414A4F',
      grey900: '#2D353C',
      grey950: '#1E262B',

      accent50: '#FAFBFF',
      accent100: '#D7DFFD',
      accent200: '#B4C4FC',
      accent300: '#91A8FC',
      accent400: '#6D8BFC',
      accent500: '#496ffc',
      accent600: '#3355CD',
      accent700: '#203D9C',
      accent800: '#12276A',
      accent900: '#071338',

      red50: '#FFF9FA',
      red100: '#FDD3D6',
      red200: '#FCADB2',
      red300: '#FB858E',
      red400: '#FB5E69',
      red500: '#fb3644',
      red600: '#CD232F',
      red700: '#9C131E',
      red800: '#6A0910',
      red900: '#380207',

      green50: '#F9FDFB',
      green100: '#CFF1E2',
      green200: '#A6E4CA',
      green300: '#7BD9B1',
      green400: '#51CD99',
      green500: '#26c280',
      green600: '#18A368',
      green700: '#0D8150',
      green800: '#055B37',
      green900: '#01321D',

      orange50: '#fff8f5',
      orange100: '#fee3d5',
      orange200: '#fdbb8f',
      orange300: '#f59420',
      orange400: '#d07d15',
      orange500: '#a9640a',
      orange600: '#8a5106',
      orange700: '#704004',
      orange800: '#532e02',
      orange900: '#3b1f01',

      blue50: '#f8f9ff',
      blue100: '#e2e7fe',
      blue200: '#bac7fd',
      blue300: '#8fa8fc',
      blue400: '#608cfc',
      blue500: '#116ef2',
      blue600: '#0c59c7',
      blue700: '#0847a1',
      blue800: '#043379',
      blue900: '#022357',

      // Theme-specific
      foreground: '$grey950',
      background: '$fff',

      // Guidance palettes
      successHigh: '$green900',
      successMedium: '$green500',
      successLow: '$green100',

      dangerHigh: '$red900',
      dangerMedium: '$red500',
      dangerLow: '$red100',

      warningHigh: '$orange900',
      warningMedium: '$orange00',
      warningLow: '$orange100',

      infoHigh: '$blue900',
      infoMedium: '$blue500',
      infoLow: '$blue100',
    },
    space: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
      7: '64px',
      8: '96px',
      9: '128px',
      10: '192px',
      11: '256px',
      12: '384px',
      13: '512px',
      14: '640px',
    },
    fontSizes: {
      0: '10px',
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
      6: '24px',
      7: '30px',
      8: '36px',
      9: '48px',
      10: '60px',
      11: '72px',
      12: '96px',
      13: '120px',
    },
    fonts: {
      default:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      monospace:
        'SF Mono, Segoe UI Mono, Roboto Mono, Ubuntu Mono, Menlo, Courier, monospace',
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacings: {
      normal: 'normal',
      caps: '0.25em',
    },
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      0: '0px',
      1: '2px',
      2: '4px',
      3: '8px',
      4: '16px',
      5: '24px',
      full: '50%',
    },
    shadows: {
      0: '0 1px 3px hsla(0, 0%, 0%, .12), 0 1px 2px hsla(0, 0%, 0%, .24)',
      1: '0 3px 6px hsla(0, 0%, 0%, .15), 0 2px 4px hsla(0, 0%, 0%, .12)',
      2: '0 10px 20px hsla(0, 0%, 0%, .15), 0 3px 6px hsla(0, 0%, 0%, .10)',
      3: '0 15px 25px hsla(0, 0%, 0%, .15), 0 5px 10px hsla(0, 0%, 0%, .2)',
      4: '0 20px 40px hsla(0, 0%, 0%, .2)',
    },
    zIndices: {},
    transitions: {},
  },
  conditions: {
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
  },
  utils: {
    p: (config) => (value) => ({
      padding: value,
    }),
    pl: (config) => (value) => ({
      paddingLeft: value,
    }),
    pt: (config) => (value) => ({
      paddingTop: value,
    }),
    pr: (config) => (value) => ({
      paddingRight: value,
    }),
    pb: (config) => (value) => ({
      paddingBottom: value,
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (config) => (value) => ({
      margin: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

export const {
  css,
  styled,
  global: globalCss,
  theme,
  keyframes,
  getCssString,
} = stitchesConfig

export type CSS = StitchesCss<typeof stitchesConfig>
