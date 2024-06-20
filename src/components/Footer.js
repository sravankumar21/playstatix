import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterImage from '../images/gameover for footer.jpeg'; // Your image for the footer

const Footer = () => {
  return (
    <footer
      className="container-fluid d-flex justify-content-between align-items-center" // Ensures proper alignment and spacing
      style={{
        background: '#000', // Black background
        color: '#fff', // White text color
        height: '45vh', // Fixed height for the footer
        padding: '10px 20px', // Padding for content spacing
      }}
    >
      {/* Copyright and year */}
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '1.2rem', // Medium font size
          paddingLeft:'50px'
        }}
      >
        © 2024 PlayStatix
      </div>

      {/* Central Image */}
      <div
        style={{
          textAlign: 'center', // Ensure the image is centered
        }}
      >
        <img
          src={FooterImage}
          alt="Footer Logo"
          style={{
            height: '80%', // Proportionally fill the height
            maxWidth: '100%', // Ensure the image doesn't overflow
          }}
        />
      </div>

      {/* Personal Information (Emails) */}
      <div
        style={{
          textAlign: 'right', // Align content to the right
          fontFamily: 'Arial, sans-serif',
          fontSize: '1.2rem',
          paddingRight:'50px'
        }}
      >
        <p>Email Us:</p>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li>battu4262@gmail.com</li>
          <li>pavanpatale@gmail.com</li>
          <li>claroprakash@gmail.com</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
