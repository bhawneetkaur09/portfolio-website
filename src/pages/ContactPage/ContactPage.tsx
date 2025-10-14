import React, { useState } from "react";
import { ContactForm } from "../../molecules/ContactForm/ContactForm";
import { ContactInfo } from "../../molecules/ContactInfo/ContactInfo";
import SuccessModal from '../../molecules/SuccessModal/SuccessModal';
import "./contactPage.css";

interface ModalData {
  isOpen: boolean;
  name: string;
  email: string;
}

const ContactPage: React.FC = () => {
  const [modalData, setModalData] = useState<ModalData>({
    isOpen: false,
    name: "",
    email: "",
  });

  const handleFormSubmit = async (formData: {
    user_name: string;
    user_email: string;
    subject: string;
    message: string;
  }) => {
    try {
      // Here you would typically send the form data to your backend
      // For now, we just show the success modal
      setModalData({
        isOpen: true,
        name: formData.user_name,
        email: formData.user_email,
      });
    } catch (error) {
      alert("Failed to send message. Please try again.");
      throw error;
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <ContactInfo />
          <ContactForm onSubmit={handleFormSubmit} />
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