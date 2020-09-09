import styled from "styled-components";
import { compose, space, color, SpaceProps, ColorProps } from "styled-system";

interface ISpacerProps {
  orientation?: "vertical" | "horizontal";
  thickness?: number | string;
  length?: number | string;
}

type SpacerProps = ISpacerProps & SpaceProps & ColorProps;

const spacerSystem = compose(space, color);

export const Spacer = styled("span")<SpacerProps>(
  (props) => ({
    width: props.orientation === "vertical" ? props.thickness : props.length,
    height: props.orientation === "vertical" ? props.length : props.thickness,
  }),
  spacerSystem
);

Spacer.displayName = "Spacer";

const defaultProps: any = {
  bg: "grayscale.7",
  orientation: "horizontal",
  thickness: 1,
  length: "100%",
};

Spacer.defaultProps = defaultProps;
