import { ColorPicker } from './ColorPicker'
import { Slider } from './Slider'
import { useStore } from './store'
import './Sidebar.css'

export function Sidebar() {
  const { width, height, depth, setSize } = useStore()

  return (
    <aside className="sidebar">
      <h2>Box Settings</h2>

      <Slider
        min={40}
        max={120}
        label="Width"
        value={width}
        onChange={(val) => setSize('w', val)}
      />

      <Slider
        min={20}
        max={50}
        label="Height"
        value={height}
        onChange={(val) => setSize('h', val)}
      />

      <Slider
        min={20}
        max={100}
        label="Depth"
        value={depth}
        onChange={(val) => setSize('d', val)}
      />

      <ColorPicker />

    </aside>
  )
}