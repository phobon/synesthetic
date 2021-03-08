import { useState, useRef, useCallback } from 'react'
import { Box, Card, Text, Button, Stack } from '~primitives'
import { motion, MotionProps, AnimatePresence } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

import { Chevron } from '~components/Icons'

import { css } from '~design'
import { cn } from '~utils/cn'
import { useSceneTreeStore } from '~store/useSceneTreeStore'

import { AwwwardsPlane } from '~meshes/Planes'
import { ClassicNoiseSphere } from '~meshes/Spheres'

type InspectorProps = React.HTMLAttributes<HTMLDivElement> & MotionProps

const colors = ['#ff0000', '#00ff00', '#0000ff']

export const Inspector = ({ ...props }: InspectorProps) => {
  const [inspectorExpanded, setInspectorExpanded] = useState<boolean>(
    () => false
  )
  const setSceneTree = useSceneTreeStore((state) => state.setSceneTree)

  const currentColorRef = useRef<number>(0)
  const currentPositionRef = useRef<number>(0)

  const addPlane = useCallback(() => {
    const id = uuidv4()
    const color = colors[currentColorRef.current]
    const position = [0, 0, currentPositionRef.current]

    setSceneTree(
      <ClassicNoiseSphere key={id} sceneId={id} />
      // <AwwwardsPlane
      //   key={id}
      //   sceneId={id}
      //   position={position}
      //   amplitude={50}
      //   frequency={2}
      //   coefficient={0.1}
      //   timeScale={0.5}
      //   color={color}
      // />
    )

    currentPositionRef.current += 50
    currentColorRef.current = (currentColorRef.current + 1) % colors.length
  }, [])

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
            Stack.className,
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
            <Stack direction='row' gap='3'>
              <Button shape='square' onClick={addPlane}>
                P
              </Button>
              <Button shape='square' onClick={addPlane}>
                C
              </Button>
              <Button
                shape='square'
                disabled
                onClick={() => {
                  console.log('sphere')
                }}
              >
                S
              </Button>
            </Stack>

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
            ></motion.div>
          )}
        </motion.section>
      </AnimatePresence>
    </motion.aside>
  )
}

Inspector.displayName = 'Inspector'
