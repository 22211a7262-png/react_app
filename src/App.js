import './App.css';
import logo from './logo.png';
import { useState } from 'react';

function App() {
  const [showContact, setShowContact] = useState(false);

  const handleClick = () => {
    setShowContact(true);
  };

  return (
    <div>
      {/* Background */}
      <div className="background"></div>

      {/* Content */}
      <div className="content">
        
        {/* Logo */}
        <img src={logo} alt="logo" className="logo" />

        <h1>ZEMOSO TECHNOLOGIES</h1>
        <p>Innovation as a service</p>

        {/* Button */}
        <button className="btn" onClick={handleClick}>
          View More
        </button>

        {/* Contact Info */}
        {showContact && (
          <div className="contact">
            <p>Email: zemosolabs@gmail.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;