import { addDecorator, configure } from '@storybook/react'
import { Box } from '~primitives'
import { css } from '~design'

addDecorator((story) => (
  <Box
    css={{
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
    }}
  >
    {story()}
  </Box>
))

configure(require.context('../components', true, /\.stories\.tsx$/), module)
