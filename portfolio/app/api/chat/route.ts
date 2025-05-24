import { NextRequest, NextResponse } from 'next/server'

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  const geminiRes = await fetch(`${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: `You're KaeGeeBot, a digital assistant for KaeGee's personal portfolio site. Help users with his resume, skills, experience, or contact info.\n\nUser: ${message}` }],
        },
      ],
    }),
  })

  const geminiData = await geminiRes.json()
  const reply = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I did not understand that.'

  // Log to N8N webhook
  await fetch(process.env.N8N_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, reply, timestamp: new Date().toISOString() }),
  })

  return NextResponse.json({ reply })
}