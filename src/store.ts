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
  width: 40,
  height: 10,
  depth: 20,
  color: '#69f',
  setColor: (val) => set({ color: val}),
  setSize: (dim, val) => set((state) => ({
    ...state,
    [dim === 'w' ? 'width' : dim === 'h' ? 'height' : 'depth']: val
  }))
}))