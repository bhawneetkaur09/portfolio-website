import React, { useRef, useState } from 'react';
import './contactForm.css';

interface ContactFormData {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!form.current) {
        throw new Error("Form reference is not available");
      }

      const formData: ContactFormData = {
        user_name: (form.current.elements.namedItem('user_name') as HTMLInputElement).value,
        user_email: (form.current.elements.namedItem('user_email') as HTMLInputElement).value,
        subject: (form.current.elements.namedItem('subject') as HTMLInputElement).value,
        message: (form.current.elements.namedItem('message') as HTMLTextAreaElement).value,
      };

      await onSubmit(formData);
      form.current.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        aria-label="Your name"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        aria-label="Your email"
      />
      <input 
        type="text" 
        name="subject" 
        placeholder="Subject" 
        required 
        aria-label="Subject"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        required
        aria-label="Your message"
      />
      <button
        type="submit"
        className={`submit-button ${isSubmitting ? "submitting" : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
