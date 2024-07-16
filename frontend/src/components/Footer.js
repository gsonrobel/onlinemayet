import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row>
          <Col md={4} className='py-3'>
            <h3>About Us</h3>
            <p>
              We are your premier destination for digital products, offering a curated selection of software, media, and downloadable content. Explore our platform to find the latest in digital innovation.
            </p>
            <p>Contact us: <a href="mailto:info@mayettech.com">info@mayettech.com</a></p>
          </Col>
          <Col md={4} className='py-3'>
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com"><FaFacebook /> Facebook</a></li>
              <li><a href="https://www.twitter.com"><FaTwitter /> Twitter</a></li>
              <li><a href="https://www.instagram.com"><FaInstagram /> Instagram</a></li>
              <li><a href="https://www.linkedin.com"><FaLinkedin /> LinkedIn</a></li>
            </ul>
          </Col>
          <Col md={4} className='py-3'>
            <h3>Contact Us</h3>
            <address>
              123 Main St<br />
              City, State 12345<br />
              United States
            </address>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className='text-center py-3'>
            <p>&copy; {new Date().getFullYear()} Your E-Commerce Platform. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
