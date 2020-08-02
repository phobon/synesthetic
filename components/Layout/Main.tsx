import styled from 'styled-components';
import { compose, space, color, SpaceProps, ColorProps } from 'styled-system';
import { motion } from 'framer-motion';

interface IMainProps {
  space?: number;
}

type MainProps =
  IMainProps
  & SpaceProps
  & ColorProps;

const motionStackSystem = compose(space, color);

export const Main = styled(motion.main)<MainProps>({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gridArea: 'main'
  },
  motionStackSystem,
);

Main.displayName = 'Main';

const defaultProps = {
};

Main.defaultProps = defaultProps;