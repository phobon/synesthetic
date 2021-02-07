/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react'
import { Box, Card, Grid, GridProps, Text, Stack } from '@phobon/base'
import { Button } from '@phobon/grimoire'
import { motion, MotionProps, AnimatePresence } from 'framer-motion'

import { Chevron } from '@/components/Icons'

type InspectorProps = GridProps &
  React.HTMLAttributes<HTMLDivElement> &
  MotionProps

const MotionGrid = motion.custom(Grid)
const MotionCard = motion.custom(Card)
const MotionBox = motion.custom(Box)

export const Inspector = ({ ...props }: InspectorProps) => {
  const [inspectorExpanded, setInspectorExpanded] = useState<boolean>(
    () => false
  )

  return (
    <MotionGrid
      as='aside'
      fullWidth
      fullHeight
      css={{
        display: 'grid',
        gridArea: 'inspector',
        placeItems: 'start',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1fr',
        pointerEvents: 'none',
      }}
      {...props}
    >
      <AnimatePresence presenceAffectsLayout exitBeforeEnter>
        <MotionCard
          fullWidth
          borderRadius={5}
          bg='background'
          alignItems='center'
          justifyContent='center'
          pl={4}
          pr={3}
          py={3}
          key='synesthetic__inspector'
          layout
          css={{
            pointerEvents: 'all',
          }}
        >
          <MotionBox
            fullWidth
            justifyContent='space-between'
            layout
            key='synesthetic__inspector__header'
          >
            <Stack>
              <Text as='h1' fontSize={2} lineHeight={1} color='grayscale.3'>
                Scape
              </Text>
              <Text fontSize={0}>Some smaller text</Text>
            </Stack>

            <Button
              onClick={() => setInspectorExpanded((previous) => !previous)}
              shape='square'
              variant='tertiary'
              size='m'
            >
              <Chevron />
            </Button>
          </MotionBox>
          {inspectorExpanded && (
            <MotionBox
              fullWidth
              flex='1'
              key='synesthetic__inspector__container'
              layout
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              asdf
            </MotionBox>
          )}
        </MotionCard>
      </AnimatePresence>
    </MotionGrid>
  )
}

Inspector.displayName = 'Inspector'
