import React, { useState } from 'react'
import { VStack, Text, Card } from '~primitives'
// import { Avatar, Popup } from '@phobon/grimoire'

import { SynestheticUser, useUserStore } from '~store'
import { css } from '~design'

export type StatusProps = React.ComponentProps<typeof VStack>

export const Status = ({ ...props }: StatusProps) => {
  const user = useUserStore<SynestheticUser>((state) => state)

  return (
    <VStack
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
      asdf
      {/* <Popup
        trigger={<Avatar name={user.displayName} />}
        variant='clean'
        shape='circle'
      >
        <Card
          className={css({
            backgroundColor: '$background',
            padding: '$2',
            borderRadius: '$3',
          })}
        >
          <Text>Test</Text>
        </Card>
      </Popup> */}
    </VStack>
  )
}
