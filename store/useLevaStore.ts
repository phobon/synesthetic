import create, { GetState, SetState } from 'zustand'
import { levaStore } from 'leva'

type LevaStoreType = typeof levaStore
type LevaStoreInstance = {
  id: string
  store: LevaStoreType
}

export type LevaStore = {
  stores: LevaStoreInstance[]
  setStores: (id: string, store: LevaStoreType) => void
}

export const useLevaStore = create<LevaStore>(
  (set: SetState<LevaStore>, get: GetState<LevaStore>) => ({
    stores: [],
    setStores: (id: string, store: LevaStoreType) =>
      set(({ stores }) => ({ stores: [...stores, { id, store }] })),
  })
)
