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

export interface Dimensions {
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
  setColor: (val) => set({ color: val }),
  setDimensions: (dims) => set((state) => ({ current: { ...state.current, ...dims } })),
  syncMetadata: (min, max) => set((state) => ({
    min: { ...state.min, ...min },
    max: { ...state.max, ...max },
    current: {
      width: min.width ?? 0,
      height: min.height ?? 0,
      depth: min.depth ?? 0,
    }
  }))
}))