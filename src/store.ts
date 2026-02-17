import { create } from 'zustand'

interface BoxState {
  width: number
  height: number
  depth: number
  color: string
  setColor: (value: string) => void
  setSize: (dimension: 'w' | 'h' | 'd', value: number) => void
}

export const useStore = create<BoxState>((set) => ({
  width: 1,
  height: 1,
  depth: 1,
  color: '#ff0000',
  setColor: (val) => set({ color: val}),
  setSize: (dim, val) => set((state) => ({
    ...state,
    [dim === 'w' ? 'width' : dim === 'h' ? 'height' : 'depth']: val
  }))
}))