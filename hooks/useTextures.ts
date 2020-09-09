import { useLoader } from "react-three-fiber";
import { TextureLoader, LinearFilter, TextureFilter, Texture } from "three";

export const useTextures = (
  images: string | string[],
  filter: TextureFilter = LinearFilter
): Texture[] => {
  const textures = useLoader(TextureLoader, images as any);
  if (Array.isArray(textures)) {
    return textures.map((texture) => ((texture.minFilter = filter), texture));
  }

  textures.minFilter = filter;
  return [textures];
};
