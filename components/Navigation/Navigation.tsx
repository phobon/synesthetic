import React, { useState } from 'react'
import { styled, css } from '~design'
import { Box, Spacer } from '~primitives'
import { motion, AnimateSharedLayout } from 'framer-motion'

import { cn } from 'utils/cn'

const MotionButton = styled(motion.button, {
  position: 'relative',
  cursor: 'pointer',
  border: 0,
  transition: 'transform 120ms ease-out, background-color 120ms ease-out',
  backgroundColor: '$grey900',
  borderRadius: '$3',
  '&:focus': {
    outline: 0,
  },
  '&:hover': {
    backgroundColor: '$grey800',
  },
})

const ease = [0.33, 1, 0.68, 1]

export interface NavigationProps {}

const NavButton = ({ selected, children, ...props }: any) => (
  <MotionButton width={32} height={32} {...props}>
    {selected && (
      <motion.div
        layoutId='navItem'
        className={cn(
          Box.className,
          css({
            pointerEvents: 'none',
            borderRadius: 'inherit',
            backgroundColor: '$purple500',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            zIndex: 1,
          })()
        )}
      />
    )}
    {children}
  </MotionButton>
)

interface NavItem {
  id: string
  type: 'button' | 'spacer' | 'flex'
}

const navItems: NavItem[] = [
  {
    id: 'one',
    type: 'button',
  },
  {
    id: 'two',
    type: 'button',
  },
  {
    id: 'three',
    type: 'button',
  },
  {
    id: 'spacer1',
    type: 'spacer',
  },
  {
    id: 'four',
    type: 'button',
  },
  {
    id: 'five',
    type: 'button',
  },
  {
    id: 'spacer2',
    type: 'spacer',
  },
  {
    id: 'flex',
    type: 'flex',
  },
  {
    id: 'six',
    type: 'button',
  },
]

export const Navigation = ({
  closeNavigation,
  backgroundColor = '$grey950',
  color = '$grey100',
  ...props
}: NavigationProps & any) => {
  const [selected, setSelected] = useState<string>(() => 'one')

  return (
    <motion.nav
      className={cn(
        Box.className,
        css({
          width: '100%',
          height: '100%',
          gridArea: 'nav',
          borderRight: '1px solid',
          borderColor: '$grey800',
          padding: '$3',
          backgroundColor,
          color,
          '> * + *': {
            marginTop: '$4',
          },
        })()
      )}
      {...props}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            ease,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            staggerChildren: 0.03,
            delay: 0.3,
            ease,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            staggerChildren: 0.03,
            delay: 0.3,
            ease,
          },
        },
      }}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Box
        css={{
          width: 32,
          height: 32,
          backgroundColor: '$accent500',
          borderRadius: '$5',
        }}
      />

      <Spacer css={{ backgroundColor: '$grey900', height: 2 }} />

      <AnimateSharedLayout>
        {navItems.map(({ id, type }) => {
          switch (type) {
            case 'spacer':
              return (
                <Spacer
                  key={id}
                  css={{ backgroundColor: '$grey900', height: 2 }}
                />
              )
            case 'flex':
              return <Box key={id} css={{ flex: '1' }} />
            default:
              return (
                <NavButton
                  key={id}
                  selected={id === selected}
                  onClick={() => setSelected(id)}
                />
              )
          }
        })}
      </AnimateSharedLayout>

      <Spacer css={{ backgroundColor: '$grey900', height: 2 }} />

      <Box
        css={{
          width: 32,
          height: 32,
          backgroundColor: '$accent500',
          borderRadius: '$5',
        }}
      />
    </motion.nav>
  )
}
