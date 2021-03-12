import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSceneTreeStore } from '~store/useSceneTreeStore'

import { Stack } from '~primitives/stack'
import { factories } from '~meshes/factories'

import { SceneObject } from './SceneObject'

export const SceneObjects = ({
  ...props
}: React.ComponentProps<typeof Stack>) => {
  const setSceneTree = useSceneTreeStore((state) => state.setSceneTree)

  return (
    <Stack css={{ width: '100%' }} gap='2' {...props}>
      {factories.map(({ name, value }: any) => {
        const id = uuidv4()

        return (
          <SceneObject
            key={`${id}__trigger`}
            id={id}
            factory={value}
            setSceneTree={setSceneTree}
          >
            {name}
          </SceneObject>
        )
      })}
    </Stack>
  )
}
