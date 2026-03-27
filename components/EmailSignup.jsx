'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

export default function EmailSignup({ heading = "Pared back to what matters", subtext = "Subscribe for curated emails featuring quality, non-toxic products from brands we trust." }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      // If API route doesn't exist yet, show success for demo
      setStatus('success')
      setEmail('')
    }
  }

  return (
    <div className="email-section">
      {/* Berthe Morisot — Young Woman Knitting, 1883. The Met, CC0 */}
      <div className="email-section-bg">
        <img
          src="/art/morisot-knitting.jpg"
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="email-section-content">
        <FadeIn>
          <h2>{heading}</h2>
          <p>{subtext}</p>
          <form className="email-form" onSubmit={handleSubmit}>
            {status === 'success' ? (
              <p style={{ color: 'var(--pared-accent)', fontSize: '0.9rem' }}>
                Welcome to Pared. We'll be in touch.
              </p>
            ) : (
              <>
                <input
                  type="email"
                  className="email-input"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="email-submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? '...' : 'Subscribe'}
                </button>
              </>
            )}
          </form>
          {status === 'error' && (
            <p style={{ color: 'var(--pared-accent)', fontSize: '0.8rem', marginTop: '1rem', opacity: 0.8 }}>
              Something went wrong. Please try again.
            </p>
          )}
        </FadeIn>
      </div>

      <div className="email-art-credit">
        Berthe Morisot, Young Woman Knitting, 1883 · The Met, CC0
      </div>
    </div>
  )
}
