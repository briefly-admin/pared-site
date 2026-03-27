import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // ============================================================
    // OPTION 1: Buttondown (recommended)
    // Uncomment and add your API key to .env.local as BUTTONDOWN_API_KEY
    // ============================================================
    //
    // const res = await fetch('https://api.buttondown.email/v1/subscribers', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Token ${process.env.BUTTONDOWN_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, tags: ['website'] }),
    // })
    //
    // if (!res.ok) {
    //   const data = await res.json()
    //   return NextResponse.json({ error: data }, { status: 400 })
    // }

    // ============================================================
    // OPTION 2: ConvertKit
    // Uncomment and add your API key + form ID to .env.local
    // ============================================================
    //
    // const res = await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     api_key: process.env.CONVERTKIT_API_KEY,
    //     email,
    //   }),
    // })
    //
    // if (!res.ok) {
    //   return NextResponse.json({ error: 'Subscription failed' }, { status: 400 })
    // }

    // ============================================================
    // OPTION 3: Beehiiv
    // Uncomment and add your API key + publication ID to .env.local
    // ============================================================
    //
    // const res = await fetch(`https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUB_ID}/subscriptions`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, reactivate_existing: true }),
    // })
    //
    // if (!res.ok) {
    //   return NextResponse.json({ error: 'Subscription failed' }, { status: 400 })
    // }

    // For now, just log the email (replace with your chosen provider above)
    console.log(`New subscriber: ${email}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
