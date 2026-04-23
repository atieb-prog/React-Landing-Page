import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import swal from "sweetalert2";
function ContactPage() {
  return (
    <>
      {/* Contact Hero Section */}
      <div className="hero-banner">
        <Container className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">
            We're here to help and answer any questions you may have
          </p>
          <p className="hero-description">
            Reach out to us through any of the following methods, and we'll get
            back to you as soon as possible.
          </p>
        </Container>
      </div>
      {/* Contact Details Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Get in Touch</h2>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <h4 className="mb-3">📞 Phone</h4>
                  <Card.Text>+1 (123) 456-7890</Card.Text>
                  <Button variant="primary" href="tel:+11234567890">
                    Call Us
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <h4 className="mb-3">📧 Email</h4>
                  <Card.Text>contact@example.com</Card.Text>
                  <Button variant="primary" href="mailto:contact@example.com">
                    Email Us
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <h4 className="mb-3">📍 Address</h4>
                  <Card.Text>123 Main St, Anytown, USA</Card.Text>
                  <Button
                    variant="primary"
                    href="https://www.google.com/maps"
                    target="_blank"
                  >
                    View on Map
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Contact Form Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Send Us a Message</h2>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() =>
                swal.fire(
                  "Message Sent",
                  "Thank you for contacting us! We will get back to you shortly.",
                  "success"
                )
              }
            >
              Send Message
            </Button>
          </Form>
        </Container>
      </section>
    </>
  );
}
export default ContactPage;
