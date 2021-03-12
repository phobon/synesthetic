import create, { GetState, SetState } from 'zustand'

export type SceneTreeStore = {
  sceneTree?: any[]
  setSceneTree: (data: any) => void
}

export const useSceneTreeStore = create<SceneTreeStore>(
  (set: SetState<SceneTreeStore>, get: GetState<SceneTreeStore>) => ({
    sceneTree: [],
    setSceneTree: (data: any) =>
      set(({ sceneTree }) => ({ sceneTree: [...sceneTree, data] })),
  })
)
