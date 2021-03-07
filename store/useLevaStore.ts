import create, { GetState, SetState } from 'zustand'
import { levaStore } from 'leva'

type LevaStoreType = typeof levaStore
type LevaStoreInstance = {
  id: string
  store: LevaStoreType
}

export type LevaStore = {
  selectedStore?: LevaStoreInstance
  stores: Map<string, LevaStoreInstance>
  addStore: (id: string, store: LevaStoreType) => void
  setSelectedStore: (id: string) => void
}

export const useLevaStore = create<LevaStore>(
  (set: SetState<LevaStore>, get: GetState<LevaStore>) => ({
    selectedStore: null,
    stores: new Map<string, LevaStoreInstance>(),
    addStore: (id: string, store: LevaStoreType) =>
      set(({ stores }) => {
        const selectedStore = { id, store }
        stores.set(id, selectedStore)

        return { stores, selectedStore }
      }),
    setSelectedStore: (id: string) =>
      set(({ stores }) => {
        const selectedStore = stores.get(id)
        return {
          stores,
          selectedStore,
        }
      }),
  })
)
