/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react'
import { Box, Card, Grid, Text, Button, Stack } from '~primitives'
import { motion, MotionProps, AnimatePresence } from 'framer-motion'

import { Chevron } from '~components/Icons'

import { css } from '~design'
import { cn } from '~util/cn'

type InspectorProps = React.HTMLAttributes<HTMLDivElement> & MotionProps

export const Inspector = ({ ...props }: InspectorProps) => {
  const [inspectorExpanded, setInspectorExpanded] = useState<boolean>(
    () => false
  )

  return (
    <motion.aside
      className={cn(
        `.${Grid}`,
        css({
          display: 'grid',
          gridArea: 'inspector',
          placeItems: 'start',
          gridTemplateRows: '1fr',
          gridTemplateColumns: '1fr',
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
        })
      )}
      {...props}
    >
      <AnimatePresence presenceAffectsLayout exitBeforeEnter>
        <motion.section
          className={cn(
            `.${Card}`,
            css({
              padding: '$3 $3 $3 $4',
              backgroundColor: '$background',
              pointerEvents: 'all',
              width: '100%',
              borderRadius: '$5',
            })
          )}
          key='synesthetic__inspector'
          layout
        >
          <motion.div
            layout
            key='synesthetic__inspector__header'
            className={cn(
              `.${Box}`,
              css({
                width: '100%',
                justifyContent: 'space-between',
              })
            )}
          >
            <Stack>
              <Text
                as='h1'
                css={{
                  fontSize: '$2',
                  lineHeight: '$tight',
                  color: '$grey700',
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
              size='m'
            >
              <Chevron />
            </Button>
          </motion.div>
          {inspectorExpanded && (
            <motion.div
              key='synesthetic__inspector__container'
              layout
              className={
                (cn(`.${Box}`),
                css({
                  width: '100%',
                  flex: '1',
                }))
              }
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              asdf
            </motion.div>
          )}
        </motion.section>
      </AnimatePresence>
    </motion.aside>
  )
}

Inspector.displayName = 'Inspector'
