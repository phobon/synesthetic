import React from 'react'
import { Leva, LevaPanel } from 'leva'

import { Stack } from '~primitives'
import { useLevaStore } from '~store/useLevaStore'

export type ControlsProps = React.ComponentProps<typeof Stack>

export const Controls = ({ ...props }: ControlsProps) => {
  // const levaStores = useLevaStore((state) => state.stores)
  const selectedStore = useLevaStore((state) => state.selectedStore)

  return (
    <Stack
      as='section'
      css={{
        gridArea: 'controls',
        position: 'relative',
        width: '100%',
        height: '100%',
        paddingRight: '$3',
        paddingTop: '$3',
        pointerEvents: 'none',

        '> *': {
          pointerEvents: 'all',
        },
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
