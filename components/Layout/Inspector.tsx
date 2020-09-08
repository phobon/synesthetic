import styled from 'styled-components';
import { Box } from '@phobon/base';
import { compose, space, color, grid, border, SpaceProps, ColorProps, GridProps, BorderProps } from 'styled-system';
import { motion } from 'framer-motion';

interface IInspectorProps {
  space?: number;
}

type InspectorProps =
  IInspectorProps
  & SpaceProps
  & ColorProps
  & GridProps
  & BorderProps;

const motionStackSystem = compose(space, color, grid, border);

const InspectorContainer = styled(motion.aside)<InspectorProps>({
    height: '100%',
    width: '100%',
    display: 'grid',
    gridArea: 'inspector',
    placeItems: 'center',
    gridTemplateRows: '8rem 1fr',
    gridTemplateColumns: '1fr',
  },
  motionStackSystem,
);

export const Inspector: React.FunctionComponent<InspectorProps & any> = ({ ...props }) => (
  <InspectorContainer
    {...props}>
    <Box fullWidth fullHeight>

    </Box>
    <Box fullWidth fullHeight>

    </Box>
  </InspectorContainer>
);

Inspector.displayName = 'Inspector';

const defaultProps = {
  color: 'grayscale.9',
};

Inspector.defaultProps = defaultProps;