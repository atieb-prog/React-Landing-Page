import { Link } from "react-router-dom";
import { Container, Row, Col, Card,Button } from "react-bootstrap";

function LearnPage() {
  return (
    <>
      {/* Learn Hero Section */}
      <div className="hero-banner">
        <Container className="hero-content">
          <h1 className="hero-title">Learn More About Our Digital Solutions</h1>
          <p className="hero-subtitle">
            Discover how we can help you achieve your goals
          </p>
          <p className="hero-description">
            We help businesses grow through innovative, reliable, and
            result-driven digital services tailored to their unique needs.
          </p>
        </Container>
      </div>
      {/* Learn Details Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">
            Brief explanation of your services.
          </h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <h4 className="mb-3">Our Approach</h4>
                  <Card.Text>
                    We provide end-to-end digital solutions designed to improve
                    visibility, efficiency, and growth. Our services combine
                    strategy, creativity, and technology to deliver measurable
                    results.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <h4 className="mb-3">Technologies We Use</h4>
                  <Card.Text>
                    We leverage the latest technologies and frameworks to build
                    robust, scalable, and efficient solutions that meet modern
                    business demands.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                    <h4 className="mb-3">Why Choose Us</h4>
                    <Card.Text>
                        Our team of experts is dedicated to delivering high-quality
                        services that drive real business value. We prioritize
                        customer satisfaction and long-term partnerships.
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                    <h4 className="mb-3">Get Started</h4>
                    <Card.Text>
                        Ready to take your business to the next level? Contact us
                        today to discuss your needs and explore how we can help.
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="text-left">
                <Card className="h-100">
                    <Card.Body>
                        <h4 className="mb-3">Our Process(How We Work)</h4>
                        <Card.Text>
                            <ul>
                                <li><strong>Discovery:</strong> We understand your goals and challenges</li>
                                <li><strong>Planning:</strong> We create a tailored strategy</li>
                                <li><strong>Design & Development:</strong> We build high-quality solutions</li>
                                <li><strong>Testing & Launch:</strong> Ensuring reliability and performance</li>
                                <li><strong>Support & Growth:</strong> Continuous improvement and support</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="text-left">
                <Card className="h-100">
                    <Card.Body>
                        <h4 className="mb-3">Benefits You Get</h4>
                        <Card.Text>
                            <ul>
                                <li>Increased online visibility</li>
                                <li>Better user experience</li>
                                <li>Scalable and secure solutions</li>
                                <li>Improved customer engagement</li>
                                <li>Long-term business growth</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                    <h4 className="mb-3">Who We Work With</h4>
                    <Card.Text>
                        We work with startups, small businesses, 
                        and growing enterprises across various industries, 
                        helping them turn ideas into impactful digital experiences.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="mb-4">
                <Card className="h-100">
                <Card.Body>
                    <h4 className="mb-3">Our Commitment</h4>
                    <Card.Text>
                        We are committed to excellence,
                        innovation, and customer satisfaction. 
                        Our goal is to deliver solutions that not only meet but exceed your expectations.    
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center">
              <Card className="h-100">
                <Card.Body>
                    <h4 className="mb-3">Ready to Learn More?</h4>
                    <Card.Text>
                        Contact us today to discuss your needs and explore how we can help your business thrive in the digital age.
                    </Card.Text>
                    <Button as={Link} to="/contact" variant="primary">
                        Contact Us
                    </Button>
                    <Button variant="outline-primary" href="tel:+11234567890" className="ms-3">
                        Call us
                    </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default LearnPage;
