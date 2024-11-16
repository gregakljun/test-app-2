import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface ContactData {
  email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email }: ContactData = req.body;

      // Call your backend API for sending the email
      const response = await axios.post('https://backend.groat.si/sendNovicke', {
        email,
      });

      // Respond with the result based on the backend API response
      if (response.status === 200) {
        res.status(200).json({ message: 'Message sent successfully!' });
      } else {
        res.status(500).json({ message: 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending message. Please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
