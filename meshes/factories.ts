import React from 'react'

import * as Planes from './Planes'
import * as Spheres from './Spheres'

type FactoryKey = {
  id: string
  type: 'sphere' | 'plane'
}

export const allFactories: Map<
  FactoryKey,
  (id: string, props?: any) => React.ReactNode
> = new Map<FactoryKey, (id: string, props?: any) => React.ReactNode>()

Object.keys(Planes).forEach((id) => {
  const value = Planes[id]
  allFactories.set({ id, type: 'plane' }, value)
})

Object.keys(Spheres).forEach((id) => {
  const value = Spheres[id]
  allFactories.set({ id, type: 'plane' }, value)
})

export const factories = Array.from(allFactories, ([{ id, type }, value]) => ({
  key,
  value,
}))
