import { Outlet, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function AuthLayout() {
  return (
    <div className="auth-layout">
      <Container fluid className="min-vh-100">
        <Row className="min-vh-100">
          {/* Left Side - Branding/Info */}
          <Col
            lg={6}
            className="d-none d-lg-flex auth-branding-section align-items-center justify-content-center"
            style={{
              background: "linear-gradient(135deg, #1d589c 0%, #072462 100%)",
              color: "white",
            }}
          >
            <div className="text-center px-5">
              <h1 className="display-4 fw-bold mb-4">
                {" "}
                Welcome to React Website{" "}
              </h1>
              <p className="lead mb-4">
                Building amazing web experiences with modern technology and
                creative solutions.
              </p>
              <div className="mt-5">
                <i
                  className="bi bi-rocket-takeoff"
                  style={{
                    fontSize: "80px",
                  }}
                >
                  {" "}
                </i>
              </div>
            </div>
          </Col>
          {/* Right Side - Auth Form */}
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center bg-light"
          >
            <div
              className="auth-form-container"
              style={{
                maxWidth: "450px",
                width: "100%",
              }}
            >
              <div className="text-center mb-4 d-lg-none">
                <Link to="/home" className="text-decoration-none">
                  <h3 className="fw-bold" style={{ color: "#1d589c" }}>
                    {" "}
                    React Website{" "}
                  </h3>
                </Link>
              </div>
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AuthLayout;
