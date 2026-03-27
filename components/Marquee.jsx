export default function Marquee() {
  const items = [
    'Zero Plastic', 'Natural Materials', 'Non-Toxic', 'Made in USA',
    'Quality Tested', 'Curated With Care',
    'Zero Plastic', 'Natural Materials', 'Non-Toxic', 'Made in USA',
    'Quality Tested', 'Curated With Care',
  ]

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div key={i} className="marquee-item">
            {item}
            <div className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  )
}
