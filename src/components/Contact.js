import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v8cfwlh', 'template_903iwbi', form.current, {
        publicKey: 'EE9y993c08pBTRjk-',
      })
      .then(
        () => {
          setEmailSent(true);
          setErrorMessage("");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          setEmailSent(false);
          setErrorMessage('Failed to send the email. Please try again later.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  {emailSent && (
                    <div className="success-message">
                      <p className="animate__animated animate__bounceIn">
                        Thank you! Your message has been successfully sent.
                      </p>
                    </div>
                  )}
                  {errorMessage && (
                    <div className="error-message">
                      <p className="animate__animated animate__shakeX">
                        {errorMessage}
                      </p>
                    </div>
                  )}
                  <form ref={form} onSubmit={onSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="from_name"
                          placeholder="First Name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone_no."
                          placeholder="Phone No."
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Message"
                          required
                        ></textarea>
                        <button type="submit">Send</button>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
