import React from 'react';
import { useNavigate } from 'react-router-dom';


function Contact() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    // Navigate to the Home page programmatically
    navigate('/');
  };

  return (
    <div>
      <h2>Contact</h2>
      <p>Contact us to abc@gmail.com</p>
      <button onClick={handleNavigateHome}>Go to Home</button>
    </div>
  );
}

export default Contact;
