'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

export default function EmailSignup({ heading = "Your inbox, made right.", subtext = "Real finds, real materials, real makers. No synthetics in the products or the editorial." }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

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
      setStatus('success')
      setEmail('')
    }
  }

  return (
    <div className="email-section">
      {/* Berthe Morisot — Young Woman Knitting, 1883. The Met, CC0 */}
      <div className="email-section-bg">
        <img src="/art/morisot-knitting.jpg" alt="" aria-hidden="true" />
      </div>

      <div className="email-section-content">
        <FadeIn>
          <h2>{heading}</h2>
          <p>{subtext}</p>
          <form className="email-form" onSubmit={handleSubmit}>
            {status === 'success' ? (
              <p style={{ color: 'var(--votl-accent)', fontSize: '0.9rem' }}>
                Welcome to Valley of the Lilies. We'll be in touch.
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
                <button type="submit" className="email-submit" disabled={status === 'loading'}>
                  {status === 'loading' ? '...' : 'Subscribe'}
                </button>
              </>
            )}
          </form>
          {status === 'error' && (
            <p style={{ color: 'var(--votl-accent)', fontSize: '0.8rem', marginTop: '1rem', opacity: 0.8 }}>
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
