import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/eai.png';
import { Link } from 'react-router-dom';
import {
  FaChevronDown,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

function AppHeader() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#003366', // deep blue
        color: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
     
      }}
    >
      {/* Social Media Top Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '15px',
          padding: '8px 30px',
          fontSize: '1.1rem',
          backgroundColor: '#002244',
        }}
      >
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={iconStyle}>
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" style={iconStyle}>
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={iconStyle}>
          <FaInstagram />
        </a>
      </div>

      {/* Navbar Below Social Icons */}
      <Navbar expand="lg" style={{ backgroundColor: '#003366', }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" style={{ height: '50px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#fff' }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ gap: '16px', alignItems: 'center' }}>
              <Nav.Link as={Link} to="/" style={linkStyle}>HOME</Nav.Link>
              <Nav.Link as={Link} to="/about" style={linkStyle}>WHO WE ARE</Nav.Link>

              {/* Dropdown for OUR PROGRAMS */}
              <div
                style={{ position: 'relative', padding: '8px 12px', color: '#fff', cursor: 'pointer' }}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  OUR PROGRAMS <FaChevronDown style={{ fontSize: '0.6rem' }} />
                </span>
                {showDropdown && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      background: '#fff',
                      color: '#000',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      zIndex: 1000,
                      minWidth: '200px',
                      padding: '10px 0',
                    }}
                  >
                    {[
                      'january', 'febuary', 'march', 'april', 'may', 'june',
                      'july', 'august', 'september', 'october', 'november', 'december'
                    ].map((month) => (
                      <div
                        key={month}
                        style={{ padding: '8px 16px' }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#f1f1f1')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        <Link to={`/${month}`} style={{ color: '#000', textDecoration: 'none' }}>
                          {month.toUpperCase()}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Nav.Link as={Link} to="/proposed" style={linkStyle}>PROPOSED PROJECTS</Nav.Link>
              <Nav.Link as={Link} to="/contact" style={linkStyle}>CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

// Inline styles
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '8px 12px',
  borderRadius: '6px',
  transition: 'background 0.3s ease',
};

const iconStyle = {
  color: '#fff',
  transition: 'opacity 0.3s',
};

export default AppHeader; 