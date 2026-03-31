import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        return NextResponse.json({ ok: false, error: 'webhook_failed' }, { status: 502 });
      }
    } catch {
      return NextResponse.json({ ok: false, error: 'webhook_error' }, { status: 502 });
    }
  } else {
    console.info('[Leads] LEAD_WEBHOOK_URL não configurado. Payload recebido.', payload);
  }

  return NextResponse.json({ ok: true });
}
