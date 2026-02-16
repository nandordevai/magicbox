import { useStore } from './store'
import './Sidebar.css'

export function Sidebar() {
  const { width, height, depth, setSize } = useStore()

  return (
    <aside className="sidebar">
      <h2>Box Settings</h2>

      <div className="control-group">
        <label>Width ({width})</label>
        <input
          className='slider'
          type="range" min="0.1" max="5" step="0.1"
          value={width}
          onChange={(e) => setSize('w', parseFloat(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>Height ({height})</label>
        <input
          className='slider'
          type="range" min="0.1" max="5" step="0.1"
          value={height}
          onChange={(e) => setSize('h', parseFloat(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>Depth ({depth})</label>
        <input
          className='slider'
          type="range" min="0.1" max="5" step="0.1"
          value={depth}
          onChange={(e) => setSize('d', parseFloat(e.target.value))}
        />
      </div>
    </aside>
  )
}