"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';


export default function ContactForm() {
  const [email, setEmail] = useState<string>('');
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');

  // Function to handle form submission
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    // Basic validation: Check if the email is valid
    if (!email) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError(''); // Clear any previous errors
    setButtonLoading(true); // Disable the button

    try {
      // Make API request to submit the form data
      const response = await axios.post('https://backend.groat.si/sendNovicke', {
        email,
      });

      if (response.status === 200) {
        // Success handling (optional)
        alert('Message sent successfully!');
      } else {
        setEmailError('Failed to send message. Please try again.');
      }
    } catch (error) {
      setEmailError('Error sending message. Please try again later.');
    } finally {
      setButtonLoading(false); // Re-enable the button
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {/* Container for input and button */}
      <div className="email-container">
        {/* Input box */}
        <input
          className="input-email"
          required
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          type="email"
          placeholder="Vnesite svoj elektronski naslov"
        />
        {/* Button inside input */}
        <button
          className="btn-obvesti-me"
          type="submit"
          disabled={buttonLoading}
        >
          Obvesti Me
        </button>
      </div>

      {/* Show email error message if exists */}
      {emailError && <InlineError error={emailError} />}
    </form>
  );
}

// Inline error component for email errors
interface InlineErrorProps {
  error: string;
}

const InlineError = ({ error }: InlineErrorProps) => {
  return <div className="error-message">{error}</div>;
};
