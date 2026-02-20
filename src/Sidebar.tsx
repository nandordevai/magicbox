import { ColorPicker } from './ColorPicker'
import { Slider } from './Slider'
import { useStore } from './store'
import './Sidebar.css'

export function Sidebar() {
  const { current, min, max, setDimensions } = useStore()

  if (current.width === 0) {
    return (
      <aside className="sidebar">
        <p>loading model…</p>
      </aside>
    )
  }

  return (
    <aside className="sidebar">
      <h2>Box Settings</h2>

      <Slider
        min={min.width}
        max={max.width}
        label="Width"
        value={current.width ?? 0}
        onChange={(val) => setDimensions({ width: val })}
      />

      <Slider
        min={min.height}
        max={max.height}
        label="Height"
        value={current.height ?? 0}
        onChange={(val) => setDimensions({ height: val })}
      />

      <Slider
        min={min.depth}
        max={max.depth}
        label="Depth"
        value={current.depth ?? 0}
        onChange={(val) => setDimensions({ depth: val })}
      />

      <ColorPicker />

    </aside>
  )
}