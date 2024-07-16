// frontend/src/components/Chat.js
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useTawkTo from '../hooks/useTawkTo'; // Adjust the path accordingly

const Chat = () => {
  useTawkTo(); // Call the useTawkTo hook to load tawk.to script

  return (
    <Container className="chat-container">
      <Row>
        <Col>
          {/* Placeholder for tawk.to widget */}
          <div className="tawk-to-widget" />
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
