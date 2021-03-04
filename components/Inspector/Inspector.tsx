import { useState } from 'react'
import { Box, Card, Grid, Text, Button, Stack, Motion } from '~primitives'
import { MotionProps, AnimatePresence } from 'framer-motion'

import { Chevron } from '~components/Icons'

type InspectorProps = React.HTMLAttributes<HTMLDivElement> &
  MotionProps &
  React.ComponentProps<typeof Motion>

export const Inspector = ({ ...props }: InspectorProps) => {
  const [inspectorExpanded, setInspectorExpanded] = useState<boolean>(
    () => false
  )

  return (
    <Motion
      as='aside'
      className={Grid.className}
      css={{
        gridArea: 'inspector',
        placeItems: 'start',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1fr',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
      {...props}
    >
      <AnimatePresence presenceAffectsLayout exitBeforeEnter>
        <Motion
          as='section'
          className={Card.className}
          css={{
            padding: '$3 $3 $3 $4',
            backgroundColor: '$background',
            pointerEvents: 'all',
            width: '100%',
            borderRadius: '$5',
          }}
          key='synesthetic__inspector'
          layout
        >
          <Motion
            layout
            key='synesthetic__inspector__header'
            className={Box.className}
            css={{
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Stack>
              <Text
                as='h1'
                css={{
                  fontSize: '$2',
                  lineHeight: '$tight',
                  color: '$grey900',
                }}
              >
                Scape
              </Text>
              <Text css={{ fontSize: '$0' }}>Some smaller text</Text>
            </Stack>

            <Button
              onClick={() => setInspectorExpanded((previous) => !previous)}
              shape='square'
              variant='tertiary'
              size='medium'
            >
              <Chevron />
            </Button>
          </Motion>
          {inspectorExpanded && (
            <Motion
              key='synesthetic__inspector__container'
              layout
              className={Box.className}
              css={{
                width: '100%',
                flex: '1',
              }}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              asdf
            </Motion>
          )}
        </Motion>
      </AnimatePresence>
    </Motion>
  )
}

Inspector.displayName = 'Inspector'
