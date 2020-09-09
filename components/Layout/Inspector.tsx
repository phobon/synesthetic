import styled from "styled-components";
import { Box } from "@phobon/base";
import {
  compose,
  space,
  color,
  grid,
  border,
  SpaceProps,
  ColorProps,
  GridProps,
  BorderProps,
} from "styled-system";
import { motion } from "framer-motion";

interface IInspectorProps {
  space?: number;
}

type InspectorProps = IInspectorProps &
  SpaceProps &
  ColorProps &
  GridProps &
  BorderProps;

const motionStackSystem = compose(space, color, grid, border);

const InspectorContainer = styled(motion.aside)<InspectorProps>(
  {
    height: "100%",
    width: "100%",
    display: "grid",
    gridArea: "inspector",
    placeItems: "center",
    gridTemplateRows: "8rem 1fr",
    gridTemplateColumns: "1fr",
    borderRight: "1px solid",
  },
  motionStackSystem
);

export const Inspector: React.FunctionComponent<InspectorProps & any> = ({
  ...props
}) => (
  <InspectorContainer borderColor="grayscale.2" {...props}>
    <Box fullWidth fullHeight></Box>
    <Box
      borderTop="1px solid"
      borderColor="grayscale.2"
      fullWidth
      fullHeight
    ></Box>
  </InspectorContainer>
);

Inspector.displayName = "Inspector";

const defaultProps = {
  bg: "grayscale.1",
  color: "grayscale.9",
};

Inspector.defaultProps = defaultProps;
