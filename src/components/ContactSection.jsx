import React, { useState } from 'react';
import Notification from './Notification';

export function ContactSection() {
  const [notification, setNotification] = useState('');

  const copyMail = () => {
    navigator.clipboard.writeText("s.alaeiyeh@gmail.com");
    setNotification('Copied to clipboard');
  };

  return (
    <div className="contactSection flex flex-col w-max justify-self-center">
      <button className="relative" onClick={copyMail}>
      {notification && (
        <Notification message={notification} onClose={() => setNotification('')} />
      )}
        Email
      </button>
      <button
        onClick={() => window.open('https://www.linkedin.com/in/sabalan-alaeiyeh-b65321277', '_blank')}
      >
        LinkedIn
      </button>
      <button onClick={() => window.open('https://github.com/Sabalann', '_blank')}>
        GitHub
      </button>

    </div>
  );
}

export default ContactSection;