export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body || {};

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  console.log('New contact message:', message);

  return res.status(200).json({ success: true, message: 'Message received!' });
}
