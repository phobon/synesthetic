import React from 'react';
import { Stack, Box } from '@phobon/base';
import { motion } from 'framer-motion';

import { Spacer } from '../Spacer';

const MotionStack = motion.custom(Stack);

const ease = [0.33, 1, 0.68, 1];

export interface NavigationProps {
}

export const Navigation: React.FunctionComponent<NavigationProps & any> = ({ closeNavigation, ...props }) => {
  return (
    <MotionStack
      fullWidth
      fullHeight
      as="aside"
      gridArea="nav"
      p={3}
      space={3}
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
      <Stack as="nav">
        nav
      </Stack>
      

      <Spacer />
      <Box flex={1} />
      <Spacer />

      <Stack space={3}>
        other
      </Stack>
    </MotionStack>
  );
};