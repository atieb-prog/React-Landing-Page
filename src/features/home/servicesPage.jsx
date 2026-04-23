import {
  Container,
  Button,
  Row,
  Col,
  Card
} from "react-bootstrap";
import { Link } from "react-router-dom";

function ServicesPage() {
  return (
    <>
      {/* Services Hero Section */}
      <div className="hero-banner">
        <Container className="hero-content">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">
            Comprehensive solutions tailored to your business needs
          </p>
          <p className="hero-description">
            Explore our wide range of professional services designed to help
            your business grow and succeed
          </p>
        </Container>
      </div>

      {/* Service Details Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Service Details</h2>
          <Row className="mb-4">
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <h4 className="mb-3">🖥️ Web Development</h4>
                  <Card.Text>
                    Custom web applications built with modern frameworks like
                    React, Vue, and Angular. We create responsive, fast, and
                    user-friendly websites that drive results.
                  </Card.Text>
                  <ul>
                    <li>Responsive Design</li>
                    <li>Performance Optimization</li>
                    <li>SEO Friendly</li>
                    <li>Cross-browser Compatible</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <h4 className="mb-3">📱 Mobile Development</h4>
                  <Card.Text>
                    Native and cross-platform mobile applications for iOS and
                    Android. Beautiful interfaces with smooth performance.
                  </Card.Text>
                  <ul>
                    <li>iOS & Android Apps</li>
                    <li>React Native</li>
                    <li>Flutter Development</li>
                    <li>App Store Deployment</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <h4 className="mb-3">🎨 UI/UX Design</h4>
                  <Card.Text>
                    User-centered design that creates engaging and intuitive
                    experiences. From wireframes to final designs.
                  </Card.Text>
                  <ul>
                    <li>User Research</li>
                    <li>Wireframing & Prototyping</li>
                    <li>Visual Design</li>
                    <li>Usability Testing</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <h4 className="mb-3">📊 Digital Marketing</h4>
                  <Card.Text>
                    Comprehensive digital marketing strategies to grow your
                    online presence and reach your target audience.
                  </Card.Text>
                  <ul>
                    <li>SEO & SEM</li>
                    <li>Social Media Marketing</li>
                    <li>Content Marketing</li>
                    <li>Analytics & Reporting</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                    <h4 className="mb-3">☁️ Cloud Solutions</h4>
                    <Card.Text>
                        Scalable and secure cloud services including migration,
                        deployment, and management on platforms like AWS, Azure, and
                        Google Cloud.
                    </Card.Text>
                    <ul>
                        <li>Cloud Migration</li>
                        <li>Infrastructure Management</li>
                        <li>DevOps Services</li>
                        <li>Cost Optimization</li>
                    </ul>
                </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="mb-4">
                <Card className="h-100">
                <Card.Body>
                    <h4 className="mb-3">🔒 Cybersecurity</h4>
                    <Card.Text>
                        Protect your digital assets with our comprehensive cybersecurity
                        services including risk assessment, threat detection, and
                        incident response.
                    </Card.Text>
                    <ul>
                        <li>Risk Assessment</li>
                        <li>Threat Detection</li>
                        <li>Incident Response</li>
                        <li>Compliance Management</li>
                    </ul>
                </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <Container className="text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">
            Let's discuss how our services can help your business grow
          </p>
          <Button as={Link} to="/contact" variant="primary" size="lg" className="me-3">
            Contact Us
          </Button>
          <Button as={Link} to="/pricing" variant="outline-primary" size="lg">
            View Pricing
          </Button>
        </Container>
      </section>
    </>
  );
}

export default ServicesPage;
