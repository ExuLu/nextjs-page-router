import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Please make a post request.',
    });
  }

  const contactData = JSON.parse(req.body);

  if (!contactData) {
    return res.status(404).json({
      success: false,
      message: 'Please provide relevant data.',
    });
  }

  const { error } = await supabase.from('contact').insert(contactData);

  if (error) {
    return res.status(500).json({
      success: false,
      message: 'Could not send your message. Please try again.',
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Thank you for your message! We will be in touch soon :)',
  });
}
