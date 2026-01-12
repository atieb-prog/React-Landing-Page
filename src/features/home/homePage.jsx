import {
  Container,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="hero-banner">
        <Container className="hero-content">
          <h1 className="hero-title">Welcome to My Website</h1>
          <p className="hero-subtitle">
            A simple, beautiful webpage built with React and Bootstrap
          </p>
          <p className="hero-description">
            Discover amazing features and services that will transform your
            experience
          </p>
          <div className="hero-buttons">
            <Button as={Link} to="/pricing" variant="light" size="lg" className="me-3">
              Get Started
            </Button>
            <Button as={Link} to="/learn" variant="outline-light" size="lg">
              Learn More
            </Button>
          </div>
        </Container>
      </div>

      {/* Services Section */}
      <section className="services-section py-5">
        <Container>
          <h2 className="text-center mb-5">What We Offer</h2>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">🚀</div>
                  <Card.Title>Fast Performance</Card.Title>
                  <Card.Text>
                    Lightning-fast load times and optimized performance for the
                    best user experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">💎</div>
                  <Card.Title>Premium Quality</Card.Title>
                  <Card.Text>
                    High-quality design and functionality that exceeds
                    expectations every time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">🔒</div>
                  <Card.Title>Secure & Reliable</Card.Title>
                  <Card.Text>
                    Top-notch security measures to keep your data safe and
                    protected.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">⚙️</div>
                  <Card.Title>Customizable</Card.Title>
                  <Card.Text>
                    Flexible solutions tailored to meet your unique business
                    needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">🤝</div>
                  <Card.Title>Excellent Support</Card.Title>
                  <Card.Text>
                    Dedicated support team available 24/7 to assist you with any
                    inquiries.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">🌐</div>
                  <Card.Title>Global Reach</Card.Title>
                  <Card.Text>
                    Services and solutions designed to cater to a worldwide
                    audience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">📈</div>
                  <Card.Title>Scalable Solutions</Card.Title>
                  <Card.Text>
                    Growth-oriented services that scale with your business
                    needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">💡</div>
                  <Card.Title>Innovative Ideas</Card.Title>
                  <Card.Text>
                    Cutting-edge solutions that keep you ahead of the
                    competition.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="stats-section py-5">
        <Container>
          <Row className="text-center">
            <Col md={3} sm={6} className="mb-4">
              <div className="stat-card">
                <h3 className="stat-number">500+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="stat-card">
                <h3 className="stat-number">1000+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="stat-card">
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Team Members</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="stat-card">
                <h3 className="stat-number">24/7</h3>
                <p className="stat-label">Support Available</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <Row>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <div className="testimonial-quote mb-3">"</div>
                  <Card.Text>
                    Amazing service! The team delivered exactly what we needed
                    and exceeded our expectations. Highly recommended!
                  </Card.Text>
                  <div className="testimonial-author mt-3">
                    <strong>Sarah Johnson</strong>
                    <div className="text-muted">CEO, Tech Corp</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <div className="testimonial-quote mb-3">"</div>
                  <Card.Text>
                    Professional, reliable, and creative. Working with this team
                    has been a game-changer for our business.
                  </Card.Text>
                  <div className="testimonial-author mt-3">
                    <strong>Michael Chen</strong>
                    <div className="text-muted">Founder, StartUp Inc</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <div className="testimonial-quote mb-3">"</div>
                  <Card.Text>
                    Outstanding quality and support. They turned our vision into
                    reality and continue to provide excellent service.
                  </Card.Text>
                  <div className="testimonial-author mt-3">
                    <strong>Emily Rodriguez</strong>
                    <div className="text-muted">Director, Creative Studio</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
