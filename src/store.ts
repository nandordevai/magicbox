import { create } from 'zustand'

interface BoxState {
  current: Dimensions
  color: string
  min: Dimensions
  max: Dimensions
  setColor: (value: string) => void
  setDimensions: (dims: Partial<Dimensions>) => void
  syncMetadata: (min: Dimensions, max: Dimensions) => void
}

interface Dimensions {
  width: number
  height: number
  depth: number
}

const defaultSize: Dimensions = {
  width: 0,
  height: 0,
  depth: 0,
}

export const useStore = create<BoxState>((set) => ({
  color: '#6699ff',
  current: defaultSize,
  min: defaultSize,
  max: defaultSize,
  setColor: (val) => set({ color: val}),
  setDimensions: (dims) => set((state) => ({ current: { ...state.current, ...dims } })),
  syncMetadata: (min, max) => set({ min, max, current: min })
}))