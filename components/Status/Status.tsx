import React, { useState } from 'react'
import { Leva } from 'leva'

import { Box, Text, Card } from '~primitives'
import { SynestheticUser, useUserStore } from '~store'
import { css } from '~design'

export type StatusProps = React.ComponentProps<typeof Box>

export const Status = ({ ...props }: StatusProps) => {
  const user = useUserStore<SynestheticUser>((state) => state)

  return (
    <Box
      as='section'
      css={{
        pointerEvents: 'all',
        gridArea: 'status',
        width: '100%',
        height: '100%',
        paddingRight: '$5',
        paddingTop: '$5',
        color: '#fff',
      }}
      {...props}
    >
      <Leva
        // detached         // default = true,  false would make the pane fill the parent dom node it's rendered in.
        // oneLineLabels    // default = false, alternative layout for labels, with labels and fields on separate rows
        hideTitleBar // default = false, hides the GUI header
        // collapsed        // default = false, when true the GUI is collpased
        // hidden           // default = false, when true the GUI is hidden
      />
    </Box>
  )
}
