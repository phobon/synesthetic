import React from 'react';
import styled from 'styled-components';
import { Stack, Box } from '@phobon/base';
import { motion, AnimateSharedLayout } from 'framer-motion';

import { Spacer } from '../Spacer';

const MotionStack = motion.custom(Stack);
const MotionBox = motion.custom(Box);

const ease = [0.33, 1, 0.68, 1];

export interface NavigationProps {
}

const NavButton: React.FunctionComponent<any> = ({ children, ...props }) => (
  <MotionBox
    width={32}
    height={32}
    bg="grayscale.3"
    borderRadius={3}
    
    {...props}>
    <MotionBox

      layoutId="navItem">
      {children}
    </MotionBox>
  </MotionBox>
);

export const Navigation: React.FunctionComponent<NavigationProps & any> = ({ closeNavigation, bg = 'grayscale.1', color = 'grayscale.9', ...props }) => {
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

      <Spacer bg="grayscale.4" thickness={2} />

      <AnimateSharedLayout>
        <NavButton />
        <NavButton />
        <NavButton />

        <Spacer bg="grayscale.4" thickness={2} />

        <NavButton />
        <NavButton />

        <Spacer bg="grayscale.4" thickness={2} />
        <Box flex={1} />

        <NavButton />
      </AnimateSharedLayout>
      

      <Spacer bg="grayscale.4" thickness={2} />

      <Box width={32} height={32} bg="accent.4" borderRadius={5} />
    </MotionStack>
  );
};