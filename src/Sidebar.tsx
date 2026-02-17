import { Slider } from './Slider'
import { useStore } from './store'
import './Sidebar.css'

export function Sidebar() {
  const { width, height, depth, setSize } = useStore()

  return (
    <aside className="sidebar">
      <h2>Box Settings</h2>

      <Slider
        label="Width"
        value={width}
        onChange={(val) => setSize('w', val)}
      />

      <Slider
        label="Height"
        value={height}
        onChange={(val) => setSize('h', val)}
      />

      <Slider
        label="Depth"
        value={depth}
        onChange={(val) => setSize('d', val)}
      />

    </aside>
  )
}