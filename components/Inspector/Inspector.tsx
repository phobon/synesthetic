import { useState } from 'react'
import { Box, Card, Text, Button, VStack } from '~primitives'
import { motion, MotionProps, AnimatePresence } from 'framer-motion'

import { Chevron } from '~components/Icons'

import { css } from '~design'
import { cn } from '~utils/cn'

type InspectorProps = React.HTMLAttributes<HTMLDivElement> & MotionProps

export const Inspector = ({ ...props }: InspectorProps) => {
  const [inspectorExpanded, setInspectorExpanded] = useState<boolean>(
    () => false
  )

  return (
    <motion.aside
      className={cn(
        Box.className,
        css({
          gridArea: 'inspector',
          placeItems: 'start',
          gridTemplateRows: '1fr',
          gridTemplateColumns: '1fr',
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          padding: '$3',
        })()
      )}
      {...props}
    >
      <AnimatePresence presenceAffectsLayout exitBeforeEnter>
        <motion.section
          className={cn(
            Card.className,
            VStack.className,
            css({
              padding: '$3 $3 $3 $4',
              pointerEvents: 'all',
              width: '100%',
              borderRadius: '$4',
              backgroundColor: '$background',
            })()
          )}
          key='synesthetic__inspector'
          layout
        >
          <motion.div
            layout
            key='synesthetic__inspector__header'
            className={cn(
              Box.className,
              css({
                width: '100%',
                justifyContent: 'space-between',
              })()
            )}
          >
            <VStack
              css={{
                alignItems: 'flex-start',
              }}
            >
              <Text
                as='h1'
                css={{
                  fontSize: '$3',
                  lineHeight: '$tight',
                  color: '$grey900',
                }}
              >
                Scape
              </Text>
              <Text css={{ fontSize: '$1' }}>Some smaller text</Text>
            </VStack>

            <Button
              onClick={() => setInspectorExpanded((previous) => !previous)}
              shape='square'
              variant='tertiary'
              size='medium'
            >
              <Chevron />
            </Button>
          </motion.div>
          {inspectorExpanded && (
            <motion.div
              key='synesthetic__inspector__container'
              layout
              className={cn(
                Box.className,
                css({
                  width: '100%',
                  flex: '1,',
                })()
              )}
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
