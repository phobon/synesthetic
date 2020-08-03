import styled from 'styled-components';
import { compose, space, color, SpaceProps, ColorProps } from 'styled-system';
import { motion } from 'framer-motion';

interface IInspectorProps {
  space?: number;
}

type InspectorProps =
  IInspectorProps
  & SpaceProps
  & ColorProps;

const motionStackSystem = compose(space, color);

export const Inspector = styled(motion.section)<InspectorProps>({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gridArea: 'inspector',
    width: '32rem',
  },
  motionStackSystem,
);



Inspector.displayName = 'Inspector';

const defaultProps = {
  bg: 'grayscale.2',
  color: 'grayscale.9',
};

Inspector.defaultProps = defaultProps;