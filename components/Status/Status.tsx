import React, { useState } from 'react'
import { Stack, Text, Card } from '~primitives'
// import { Avatar, Popup } from '@phobon/grimoire'

import { SynestheticUser, useUserStore } from '~store'
import { css } from '~design'

export const Status = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const user = useUserStore<SynestheticUser>((state) => state)

  return (
    <Stack
      as='section'
      css={{
        pointerEvents: 'all',
        gridArea: 'status',
        width: '100%',
        height: '100%',
      }}
      {...props}
    >
      {/* <Popup
        trigger={<Avatar name={user.displayName} />}
        variant='clean'
        shape='circle'
      >
        <Card
          className={css({
            backgroundColor: '$backgroundPrimary',
            padding: '$2',
            borderRadius: '$3',
          })}
        >
          <Text>Test</Text>
        </Card>
      </Popup> */}
    </Stack>
  )
}
