/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { Box, Card, Grid, GridProps, Text, Stack } from "@phobon/base";
import { Button } from "@phobon/grimoire";
import { motion, MotionProps } from "framer-motion";

import { Chevron } from "@/components/Icons";

type InspectorProps = GridProps &
  React.HTMLAttributes<HTMLDivElement> &
  MotionProps;

const MotionGrid = motion.custom(Grid);

export const Inspector: React.FunctionComponent<InspectorProps> = ({
  ...props
}) => {
  const [inspectorExpanded, setInspectorExpanded] = useState<boolean>(
    () => false
  );

  return (
    <MotionGrid
      as="aside"
      fullWidth
      fullHeight
      bg="background"
      css={{
        display: "grid",
        gridArea: "inspector",
        placeItems: "center",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "1fr",
        pointerEvents: "all",
      }}
      {...props}
    >
      <Card
        fullWidth
        fullHeight
        borderRadius={5}
        bg="background"
        alignItems="center"
        justifyContent="center"
        pl={4}
        pr={3}
        py={3}
      >
        <Box fullWidth justifyContent="space-between">
          <Stack>
            <Text as="h1" fontSize={2} lineHeight={1} color="grayscale.3">
              Scape
            </Text>
            <Text fontSize={0}>Some smaller text</Text>
          </Stack>

          <Button
            onClick={() => setInspectorExpanded((previous) => !previous)}
            shape="square"
            variant="tertiary"
            size="m"
          >
            <Chevron />
          </Button>
        </Box>
      </Card>
      {inspectorExpanded && <Text>Expanded</Text>}
      {!inspectorExpanded && <Text>Collapsed</Text>}
    </MotionGrid>
  );
};

Inspector.displayName = "Inspector";
