export default function Marquee() {
  const items = [
    'The everyday, made right',
    'Nothing synthetic',
    'Real materials',
    'Against the disposable',
    'Non-toxic by design',
    'Made to last',
    'Without compromise',
    'Real makers',
    'The everyday, made right',
    'Nothing synthetic',
    'Real materials',
    'Against the disposable',
    'Non-toxic by design',
    'Made to last',
    'Without compromise',
    'Real makers',
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
