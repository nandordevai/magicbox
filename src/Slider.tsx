import './Slider.css'

interface SliderProps {
  label: string
  value: number
  onChange: (value: number) => void
}

export function Slider({ label, value, onChange }: SliderProps ) {
  const percentage = value * 20

  return (
    <div className="slider">
      <label className="slider-label">
        <span className="label-text">{label}</span>
        <span className="label-value">{value.toFixed(1)} m</span>
      </label>
      <input
        className='slider-input'
        type="range" min="0.1" max="5" step="0.1"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ '--progress': `${percentage}%` } as any }
      />
    </div>
  )
}