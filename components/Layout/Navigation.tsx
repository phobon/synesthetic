import React, { useState } from 'react';
import styled from 'styled-components';
import {
  compose, space, layout, border, color, background,
} from 'styled-system';
import { Stack, Box } from '@phobon/base';
import { motion, AnimateSharedLayout } from 'framer-motion';

import { Spacer } from '../Spacer';

const MotionStack = motion.custom(Stack);
const MotionBox = motion.custom(Box);

const motionButtonSystem = compose(space, layout, border, color, background);
const MotionButton = styled(motion.button)({
    position: 'relative',
    cursor: 'pointer',
    border: 0,
    transition: 'transform 120ms ease-out, background-color 120ms ease-out',
    '&:focus': {
      outline: 0,
    },
  }, ({ theme }) => ({
    '&:hover': {
      backgroundColor: theme.colors.grayscale[2],
    }
  }), motionButtonSystem)

const ease = [0.33, 1, 0.68, 1];

export interface NavigationProps {
}

const NavButton: React.FunctionComponent<any> = ({ selected, children, ...props }) => (
  <MotionButton
    width={32}
    height={32}
    bg="grayscale.2"
    borderRadius={3}
    {...props}>
    {selected && (
      <MotionBox
        layoutId="navItem"
        css={{
          pointerEvents: 'none',
        }}
        borderRadius="inherit"
        bg="purples.4"
        position="absolute"
        fullWidth
        fullHeight
        left={0}
        top={0}
        zIndex={1} />
    )}
    {children}
  </MotionButton>
);

interface NavItem {
  id: string;
  type: 'button' | 'spacer' | 'flex';
}

const navItems: NavItem[] = [
  {
    id: 'one', type: 'button',
  },
  {
    id: 'two', type: 'button',
  },
  {
    id: 'three', type: 'button',
  },
  {
    id: 'spacer1', type: 'spacer',
  },
  {
    id: 'four', type: 'button',
  },
  {
    id: 'five', type: 'button',
  },
  {
    id: 'spacer2', type: 'spacer',
  },
  {
    id: 'flex', type: 'flex',
  },
  {
    id: 'six', type: 'button',
  },
];

export const Navigation: React.FunctionComponent<NavigationProps & any> = ({ closeNavigation, bg = 'grayscale.0', color = 'grayscale.9', ...props }) => {
  const [selected, setSelected] = useState<string>(() => 'one');
  
  return (
    <MotionStack
      fullWidth
      fullHeight
      as="nav"
      gridArea="nav"
      p={3}
      space={4}
      bg={bg}
      color={color}
      {...props}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            ease,
          }
        },
        hidden: {
          opacity: 0,
          transition: {
            staggerChildren: 0.03,
            delay: 0.3,
            ease,
          }
        },
        exit: {
          opacity: 0,
          transition: {
            staggerChildren: 0.03,
            delay: 0.3,
            ease,
          }
        },
      }}
      initial="hidden"
      animate="visible"
      exit="exit">
      <Box width={32} height={32} bg="accent.4" borderRadius={5} />

      <Spacer bg="grayscale.2" thickness={2} />

      <AnimateSharedLayout>
        {navItems.map(({ id, type }) => {
          switch (type) {
            case 'spacer':
              return (
                <Spacer key={id} bg="grayscale.2" thickness={2} />
              );
            case 'flex':
              return (
                <Box key={id} flex={1} />
              );
            default:
              return (
                <NavButton
                  key={id}
                  selected={id === selected}
                  onClick={() => setSelected(id)} />
              );
          }
        })}
      </AnimateSharedLayout>

      <Spacer bg="grayscale.2" thickness={2} />

      <Box width={32} height={32} bg="accent.4" borderRadius={5} />
    </MotionStack>
  );
};