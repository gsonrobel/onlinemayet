// frontend/src/components/Chat.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import useTawkTo from '../hooks/useTawkTo'; // Adjust the path accordingly

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message to the chat
    const newMessage = {
      text: input,
      fromUser: true
    };
    setMessages([...messages, newMessage]);
    setInput('');

    // Simulate response from the other participant
    simulateResponse(input);
  };

  const simulateResponse = (userMessage) => {
    setTimeout(() => {
      const response = {
        text: `You: "${userMessage}". How could I help You.`,
        fromUser: false
      };
      setMessages([...messages, response]);
    }, 1000);
  };

  useTawkTo(); // Call the useTawkTo hook to load tawk.to script

  return (
    <Container className="chat-container">
      <Row>
        <Col>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.fromUser ? 'user' : 'other-user'}`}>
                {message.text}
              </div>
            ))}
          </div>{/* 
          <Form onSubmit={handleSendMessage}>
            <Form.Group controlId="chatForm">
              <Row>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </Col>
               <Col xs={2}>
                  <Button variant="primary" type="submit">
                    Send
                  </Button> 
                </Col>
              </Row>
            </Form.Group>
          </Form>*/}
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
