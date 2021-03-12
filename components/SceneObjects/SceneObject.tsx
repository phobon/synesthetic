import React, { useCallback } from 'react'

import { Button } from '~primitives/button'

export const SceneObject = ({
  id,
  factory,
  children,
  setSceneTree,
  ...props
}) => {
  const addSceneObject: any = useCallback(
    (e: React.MouseEventHandler<HTMLButtonElement>) => {
      const SceneComponent = factory
      setSceneTree(<SceneComponent sceneId={id} key={id} />)
    },
    []
  )
  return (
    <Button
      onClick={addSceneObject}
      css={{
        width: '100%',
        borderRadius: '0',
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
