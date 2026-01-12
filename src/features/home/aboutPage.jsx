import { Container, Row, Col, Card } from "react-bootstrap";

function AboutPage() {
  return (
    <>
      {/* About Hero Section */}
      <div className="hero-banner">
        <Container className="hero-content">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            Learn more about our mission, vision, and values
          </p>
          <p className="hero-description">
            We are committed to delivering high-quality services that empower
            businesses to thrive in the digital age.
          </p>
        </Container>
      </div>
      {/* About Details Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Story</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <h4 className="mb-3">Our Mission</h4>
                  <Card.Text>
                    Our mission is to provide innovative, reliable, and
                    effective digital solutions that help businesses grow,
                    adapt, and succeed in todays fast-paced digital world. We
                    strive to combine creativity, technology, and strategic
                    thinking to deliver high-quality services that not only meet
                    but exceed our clients expectations. By understanding each
                    businesss unique goals and challenges, we create customized
                    solutions that drive meaningful results and long-term value.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <h4 className="mb-3">Our Vision</h4>
                  <Card.Text>
                    Our vision is to become a leading provider of digital
                    services, recognized for our unwavering commitment to
                    quality, innovation, and customer satisfaction. We aspire to
                    set new standards in the digital industry by continuously
                    embracing emerging technologies, creative solutions, and
                    best practices that deliver real value to our clients. By
                    fostering a culture of excellence and forward thinking, we
                    aim to create impactful digital experiences that help
                    businesses strengthen their presence, build lasting
                    relationships with their audiences, and achieve sustainable
                    growth.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-4">
                <Card className="h-100">
                    <Card.Body>
                        <h4 className="mb-3">Our Values</h4>
                        <Card.Text>
                            <ul>
                                <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in all our interactions.</li>
                                <li><strong>Customer Focus:</strong> Our clients are at the heart of everything we do. We are dedicated to understanding and meeting their unique needs.</li>
                                <li><strong>Innovation:</strong> We embrace creativity and continuously seek new ways to improve our services and solutions.</li>
                                <li><strong>Quality:</strong> We are committed to delivering excellence in every project, ensuring that our solutions are reliable, effective, and impactful.</li>
                                <li><strong>Collaboration:</strong> We believe in the power of teamwork and foster a collaborative environment that encourages open communication and shared success.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default AboutPage;
