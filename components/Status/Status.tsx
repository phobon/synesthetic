/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'
import { Stack, StackProps, Text, Card } from '@phobon/base'
import { Avatar, Popup } from '@phobon/grimoire'

import { SynestheticUser, useUserStore } from '@/store'

export const Status = ({
  ...props
}: StackProps & React.HTMLAttributes<HTMLDivElement>) => {
  const user = useUserStore<SynestheticUser>((state) => state)

  return (
    <Stack
      as='section'
      gridArea='status'
      fullWidth
      fullHeight
      css={{
        pointerEvents: 'all',
      }}
      {...props}
    >
      <Popup
        trigger={<Avatar name={user.displayName} />}
        variant='clean'
        shape='circle'
      >
        <Card bg='background' p={2} borderRadius={3}>
          <Text>Test</Text>
        </Card>
      </Popup>
    </Stack>
  )
}
