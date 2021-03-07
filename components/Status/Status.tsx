import React, { useState } from 'react'
import { Leva, LevaPanel } from 'leva'

import { Stack, Text, Card } from '~primitives'
import { SynestheticUser, useUserStore } from '~store'
import { useLevaStore } from '~store/useLevaStore'
import { css } from '~design'

export type StatusProps = React.ComponentProps<typeof Stack>

export const Status = ({ ...props }: StatusProps) => {
  const user = useUserStore<SynestheticUser>((state) => state)
  // const levaStores = useLevaStore((state) => state.stores)
  const selectedStore = useLevaStore((state) => state.selectedStore)

  return (
    <Stack
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
        detached={false}
        // detached         // default = true,  false would make the pane fill the parent dom node it's rendered in.
        // oneLineLabels    // default = false, alternative layout for labels, with labels and fields on separate rows
        // hideTitleBar // default = false, hides the GUI header
        // collapsed        // default = false, when true the GUI is collpased
        // hidden           // default = false, when true the GUI is hidden
      />
      {selectedStore && (
        <LevaPanel key={selectedStore?.id} store={selectedStore?.store} />
      )}
      {/* {levaStores.map(({ id, store }) => (
        <LevaPanel key={id} store={store} />
      ))} */}
    </Stack>
  )
}
