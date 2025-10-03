import React, { useState, useRef } from "react";
import SocialLinks from "../../molecules/SocialLinks/SocialLinks";
import SuccessModal from '../../molecules/SuccessModal/SuccessModal';
import { contactInfo } from '../../utils/contact';
import "./contactPage.css";

interface ModalData {
  isOpen: boolean;
  name: string;
  email: string;
}

const ContactPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<any>("");
  const [modalData, setModalData] = useState<ModalData>({
    isOpen: false,
    name: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    if (!form.current) {
      console.error("Form reference is not available");
      return;
    }

    try {
      const formData = {
        user_name: (form.current.elements.namedItem('user_name') as HTMLInputElement).value,
        user_email: (form.current.elements.namedItem('user_email') as HTMLInputElement).value,
        subject: (form.current.elements.namedItem('subject') as HTMLInputElement).value,
        message: (form.current.elements.namedItem('message') as HTMLTextAreaElement).value,
      };

      setModalData({
        isOpen: true,
        name: formData.user_name,
        email: formData.user_email,
      });

      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      console.log("Form submission completed");
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <aside className="contact-info">
            <h3>Let's Talk</h3>
            <p>{contactInfo.description}</p>
            <address className="contact-details">
              <dl className="contact-item">
                <dt>Email:</dt>
                <dd>
                  <a href={contactInfo.email.href}>
                    {contactInfo.email.address}
                  </a>
                </dd>
              </dl>
              <dl className="contact-item">
                <dt>Location:</dt>
                <dd>{contactInfo.location}</dd>
              </dl>
              <dl className="contact-item flex">
                <dt>Feel free to ping me on social media</dt>
                <dd>
                  <SocialLinks />
                </dd>
              </dl>
            </address>
          </aside>
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
            ></textarea>
            <button
              type="submit"
              className={`submit-button ${isSubmitting ? "submitting" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
      <SuccessModal 
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        name={modalData.name}
        email={modalData.email}
      />
    </main>
  );
};

export default ContactPage; 