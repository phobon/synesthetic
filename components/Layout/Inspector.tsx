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

const MotionGrid = motion.custom(MotionGrid);

const motionStackSystem = compose(space, color);

export const Inspector = styled(motion.section)<InspectorProps>({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gridArea: 'inspector',
  },
  motionStackSystem,
);

const Inspector: React.FunctionComponent = ({ children, ...props }) => {
  return (
    <MotionGrid
      as="aside"
      gridTemplateColumns="1fr"
      gridTemplateRows="1fr auto">
      {children}
    </MotionGrid>
  )
}

Inspector.displayName = 'Inspector';

const defaultProps = {
  bg: 'grayscale.2',
  color: 'grayscale.9',
};

Inspector.defaultProps = defaultProps;