const items = [
  'Food Therapy', 'Diabetes Reversal Protocol', 'Hypertension Management',
  'Executive Wellness', 'Gut Restoration', 'Weight Therapy',
  'Hormonal Balance', 'Anti-Inflammation', 'Liver Detox', 'Lifestyle Medicine',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
