import React, {
  Suspense,
  useRef,
  useEffect,
  createContext,
  useState,
  useMemo,
} from "react";
import { Html } from "drei";

import { useTextures } from "@/hooks/useTextures";
import { useBlock } from "@/hooks/useBlock";

import { VerticalLerpPlane, SandboxPlane } from "@/components/Planes";
import { useFrame } from "react-three-fiber";
import { useTimelineStore } from "@/store/useTimelineStore";
import { NoisePatchMaterial } from "@/materials/NoisePatchMaterial";

export const Journey: React.FunctionComponent<any> = ({ images, ...props }) => {
  const [img] = useTextures(images);
  const { size, contentMaxWidth, aspect } = useBlock();
  const dataRef = useRef<Uint8Array>(useTimelineStore.getState().data);
  const materialRef = useRef(null);

  const isPlaying = useTimelineStore((state) => state.isPlaying);

  useEffect(
    () =>
      useTimelineStore.subscribe<Uint8Array>(
        (data) => (dataRef.current = data),
        (state) => state.data
      ),
    []
  );

  useFrame(() => {
    if (isPlaying) {
      console.log(dataRef.current);
      materialRef.current.angle = dataRef.current[0] / 100;
    }
  });

  return (
    <group>
      <mesh {...props} scale={[1, 1, 1]} position={[0, 0, 1]}>
        <planeBufferGeometry attach="geometry" args={[300, 300, 32, 32]} />
        <NoisePatchMaterial
          color={"white"}
          map={img}
          hovered={true}
          ref={materialRef}
          // angle={angle}
        />
      </mesh>
    </group>
  );
};
