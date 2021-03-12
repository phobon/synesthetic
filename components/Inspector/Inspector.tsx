import React, { useState } from 'react'
import { box, Text, Button, Stack, stack } from '~primitives'
import { motion, MotionProps, AnimatePresence } from 'framer-motion'

import { Chevron } from '~components/Icons'

import { css } from '~design'
import { cn } from '~utils/cn'

import { SceneObjects } from '../SceneObjects'

type InspectorProps = React.HTMLAttributes<HTMLDivElement> & MotionProps

export const Inspector = ({ ...props }: InspectorProps) => {
  const [inspectorExpanded, setInspectorExpanded] = useState<boolean>(
    () => true
  )

  return (
    <motion.aside
      className={cn(
        box(),
        css({
          gridArea: 'inspector',
          placeItems: 'start',
          gridTemplateRows: '1fr',
          gridTemplateColumns: '1fr',
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          paddingTop: '$3',
          paddingLeft: '$3',
        })()
      )}
      {...props}
    >
      <AnimatePresence presenceAffectsLayout exitBeforeEnter>
        <motion.section
          className={cn(
            stack(),
            css({
              padding: '0',
              pointerEvents: 'all',
              width: '100%',
              borderRadius: '$1',
              backgroundColor: '$panelBackground',
            })()
          )}
          key='synesthetic__inspector'
          layout
        >
          <motion.div
            layout
            key='synesthetic__inspector__header'
            className={cn(
              box(),
              css({
                width: '100%',
                justifyContent: 'space-between',
              })()
            )}
          >
            <Stack
              css={{
                width: '100%',
                justifyContent: 'space-between',
                padding: '$3',
              }}
              direction='row'
              gap='3'
            >
              <Text
                as='h2'
                css={{
                  color: '$grey50',
                  fontSize: '$5',
                }}
              >
                SCAPE
              </Text>
              <Button
                onClick={() => setInspectorExpanded((previous) => !previous)}
                shape='square'
                size='medium'
              >
                <Chevron />
              </Button>
            </Stack>
          </motion.div>
          {inspectorExpanded && (
            <motion.div
              key='synesthetic__inspector__container'
              layout
              className={cn(
                box(),
                css({
                  width: '100%',
                  flex: '1',
                })()
              )}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SceneObjects />
            </motion.div>
          )}
        </motion.section>
      </AnimatePresence>
    </motion.aside>
  )
}

Inspector.displayName = 'Inspector'
