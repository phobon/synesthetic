import { useCallback, useEffect } from 'react'
import { useCreateStore, useControls } from 'leva'

import { useLevaStore } from '~store/useLevaStore'

export const useSceneObject = (
  id,
  controls: any = {},
  options: any = {}
): any => {
  const store = useCreateStore()
  const { addStore, selectedStore, setSelectedStore } = useLevaStore(
    ({ addStore, selectedStore, setSelectedStore }) => ({
      addStore,
      selectedStore,
      setSelectedStore,
    })
  )

  // Add the store to the collection on creation
  useEffect(() => {
    if (!store) {
      return
    }

    addStore(id, store)
  }, [store])

  // Set the selected state of this particular plane
  useEffect(() => {
    if (!selectedStore) {
      return
    }

    if (selectedStore.id === id) {
      // This is the selected store, so do something to show that this is the selected plane
    }
  }, [selectedStore])

  // Handle the original onClick callback and select this particular scene object
  const onClick = useCallback((event: MouseEvent) => {
    if (options.onClick) {
      options.onClick(event)
    }

    // Set the selected store
    setSelectedStore(id)
  }, [])

  // Modified controls for leva store
  const modifiedControls = useControls(controls, { store })

  return {
    ...modifiedControls,
    onClick,
  }
}
