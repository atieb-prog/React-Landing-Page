import { Outlet, Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import swal from "sweetalert2";

function Layout() {
  return (
    <div className="app-container">
      {/* navigation */}
      <Navbar collapseOnSelect expand="lg" className="navbar-1" variant="dark">
        <Container>
          <Navbar.Brand className="navbar-brand" as={Link} to="/home">
            React Website
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navcol ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <footer className="footer">
        <Container className="py-5">
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="footer-section">
                <h4 className="footer-heading mb-3">React Website</h4>
                <p className="footer-description">
                  Building amazing web experiences with modern technology and
                  creative solutions.
                </p>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <div className="footer-section">
                <h5 className="footer-heading mb-3">Quick Links</h5>
                <div className="footer-links">
                  <Link to="/home">Home</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/pricing">Pricing</Link>
                  <Link to="/about">About</Link>
                  <Link to="/faq">FAQ</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <div className="footer-section">
                <h5 className="footer-heading mb-3">Contact Info</h5>
                <div className="footer-contact">
                  <p>
                    <i className="bi bi-envelope"></i> info@reactwebsite.com
                  </p>
                  <p>
                    <i className="bi bi-telephone"></i> +1 (123) 456-7890
                  </p>
                  <p>
                    <i className="bi bi-geo-alt"></i> 123 Main St, Anytown, USA{" "}
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <div className="footer-section">
                <h5 className="footer-heading mb-3">Follow Us</h5>
                <div className="footer-social mb-3">
                  <a href="#facebook" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#twitter" aria-label="Twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#linkedin" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#instagram" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
                <h6 className="footer-subheading mt-4">Newsletter</h6>
                <div className="footer-newsletter">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="form-control mb-2"
                  />
                  <Button variant="light" size="sm" className="w-100" onClick={() => {
                    swal.fire(
                      'Subscribed!',
                        'You have successfully subscribed to our newsletter.',
                        'success'
                    );
                  }}>

                    Subscribe
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="footer-bottom">
          <Container>
            <p className="text-center mb-0">
              &copy; 2026 React Website. All rights reserved.
            </p>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
