import React, { useState, useRef } from "react";
import SocialLinks from "../../molecules/SocialLinks/SocialLinks";
import SuccessModal from '../../molecules/SuccessModal/SuccessModal';
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
    <div className="contact-page">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <section className="contact-section">
          <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Talk</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:bhawneetkaur09@gmail.com">
                bhawneetkaur09@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <strong>Location:</strong>
              <span>Ludhiana</span>
            </div>
            <div className="contact-item flex">
              <strong>Feel free to ping me on social media</strong>
              <SocialLinks />
            </div>
          </div>
        </div>
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
            ></textarea>
          </div>
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
      </div>
    </div>
  );
};

export default ContactPage; 