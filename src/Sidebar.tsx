import { ColorPicker } from './ColorPicker'
import { Slider } from './Slider'
import { useStore } from './store'
import './Sidebar.css'

export function Sidebar() {
  const { current, min, max, setDimensions } = useStore()

  return (
    <aside className="sidebar">
      <h2>Box Settings</h2>

      <Slider
        min={min.width}
        max={max.width}
        label="Width"
        value={current.width}
        onChange={(val) => setDimensions({ width: val })}
      />

      <Slider
        min={min.height}
        max={max.height}
        label="Height"
        value={current.height}
        onChange={(val) => setDimensions({ height: val })}
      />

      <Slider
        min={min.depth}
        max={max.depth}
        label="Depth"
        value={current.depth}
        onChange={(val) => setDimensions({ depth: val })}
      />

      <ColorPicker />

    </aside>
  )
}