import React, {
  Suspense,
  useRef,
  useEffect,
  createContext,
  useState,
} from "react";
import { Html } from "drei";

import { useTextures } from "@/hooks/useTextures";
import { useBlock } from "@/hooks/useBlock";

import { VerticalLerpPlane, SandboxPlane } from "@/components/Planes";
import { useFrame } from "react-three-fiber";
import { useScapeStore } from "@/store";

export const Journey: React.FunctionComponent<any> = ({ images, ...props }) => {
  const [img] = useTextures(images);
  const { size, contentMaxWidth, aspect } = useBlock();

  const increment = useScapeStore((state) => state.increment);

  useFrame(() => {
    // increment();
  });

  return (
    <>
      <group>
        {/* <SandboxPlane args={[1, 1, 32, 32]} size={size} scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} frustumCulled={false} /> */}
        <VerticalLerpPlane
          map={img}
          args={[1, 1, 32, 32]}
          size={size}
          scale={[contentMaxWidth, contentMaxWidth / aspect, 1]}
          frustumCulled={false}
        />
      </group>
    </>
  );
};
