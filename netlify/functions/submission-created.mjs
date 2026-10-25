// Netlify event function: runs when a verified Netlify Forms submission is created (production forms only).
// Sends a confirmation auto-reply to leads from /contact/ (EN) and /contacto/ (ES) via Resend.

const FROM = 'Diego Alvarado <diego@alvaradorealtygroup.com>';
const REPLY_TO = 'diego@alvaradorealtygroup.com';
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/;

const SIGNATURE = [
  'Diego Alvarado, REALTOR®',
  'Alvarado Realty Group',
  '870 International Pkwy Ste 280, Flower Mound, TX 75022',
  'diego@alvaradorealtygroup.com · alvaradorealtygroup.com',
];

const COPY = {
  contact: {
    subject: 'Thanks, I got your message',
    greeting: (n) => (n ? `Hi ${n},` : 'Hi there,'),
    paras: [
      "Thanks for reaching out. Your message came through, and I'll get back to you personally, usually within one business day.",
      "If it's time-sensitive, call or text me at (214) 833-8911.",
    ],
  },
  contacto: {
    subject: 'Gracias, recibí su mensaje',
    greeting: (n) => (n ? `Hola ${n},` : 'Hola,'),
    paras: [
      'Gracias por comunicarse conmigo. Recibí su mensaje y le responderé personalmente, normalmente en un día hábil.',
      'Si es urgente, llámeme o envíeme un mensaje de texto al (214) 833-8911.',
    ],
  },
};

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function firstName(name) {
  const f = String(name || '').trim().split(/\s+/)[0] || '';
  return f.replace(/[\r\n<>]/g, '').slice(0, 40);
}

export function buildEmail(formName, data) {
  const c = COPY[formName];
  const greeting = c.greeting(firstName(data.name));
  const text = [greeting, '', c.paras[0], '', c.paras[1], '', SIGNATURE.join('\n')].join('\n');
  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#222">` +
    `<p>${esc(greeting)}</p>` +
    c.paras.map((p) => `<p>${esc(p)}</p>`).join('') +
    `<p>${SIGNATURE.map(esc).join('<br>')}</p></div>`;
  return { subject: c.subject, text, html };
}

/** Returns { send: false, reason } or { send: true, to, email }. */
export function plan(payload) {
  const formName = payload?.form_name;
  if (!COPY[formName]) return { send: false, reason: `ignored form: ${formName}` };
  const data = payload.data || {};
  if (String(data['bot-field'] || '').trim()) return { send: false, reason: 'honeypot filled' };
  const to = String(data.email || payload.email || '').trim();
  if (!EMAIL_RE.test(to) || to.length > 254) return { send: false, reason: 'invalid email' };
  return { send: true, to, email: buildEmail(formName, data) };
}

export async function sendViaResend(to, email, apiKey) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to: [to], reply_to: REPLY_TO, subject: email.subject, text: email.text, html: email.html }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Resend ${res.status}: ${JSON.stringify(body)}`);
  return body;
}

export const handler = async (event) => {
  try {
    const payload = JSON.parse(event.body || '{}').payload || {};
    const p = plan(payload);
    if (!p.send) {
      console.log(`auto-reply skipped: ${p.reason}`);
      return { statusCode: 200, body: 'skipped' };
    }
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('auto-reply: RESEND_API_KEY not set');
      return { statusCode: 200, body: 'no key' };
    }
    const r = await sendViaResend(p.to, p.email, apiKey);
    console.log(`auto-reply sent (${payload.form_name}) id=${r.id}`);
    return { statusCode: 200, body: 'sent' };
  } catch (err) {
    console.error('auto-reply error:', err?.message || err);
    return { statusCode: 200, body: 'error logged' };
  }
};
