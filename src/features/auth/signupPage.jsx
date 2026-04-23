import { Form, Button, Card, Row, Col, InputGroup } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import Routepath from "@routes/routes.js";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert2";

function SignupPage() {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find(
            (user) => user.email === values.email
        );
        if (existingUser) {
            throw new Error("User with this email already exists");
        }
        const newUser = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        swal.fire({
          icon: "success",
          title: "Signup Successful",
          text: "Your account has been created. Redirecting to login...",
          showConfirmButton: false,
          timer: 1000,
        });
        
        navigate(Routepath.LOGIN);
      } catch (err) {
        swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: err.message || "Please try again.",
        });
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="p-4">
        <div className="text-center mb-4">
          <h2 className="fw-bold"> Create Account </h2>
          <p className="text-muted"> Sign up to get started </p>
        </div>

        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label> First Name </Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  {formik.errors.firstName}{" "}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label> Last Name </Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.lastName && formik.errors.lastName}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  {formik.errors.lastName}{" "}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label> Email address </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.email && formik.errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              {" "}
              {formik.errors.email}{" "}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label> Password </Form.Label>
            <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.password && formik.errors.password}
              required
            />
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary position-absolute end-0 top-50 translate-middle-y me-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </button>
            </InputGroup>
            <Form.Control.Feedback type="invalid">
              {" "}
              {formik.errors.password}{" "}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              Must be at least 6 characters long
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label> Confirm Password </Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              {" "}
              {formik.errors.confirmPassword}{" "}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 py-2 mb-3"
            size="lg"
            disabled={loading}
            style={{
              background: "linear-gradient(135deg, #1d589c  0%, #072462 100%)",
              border: "none",
            }}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </Button>
        </Form>
        <div className="text-center mt-4">
          <p className="text-muted mb-0">
            Already have an account?{" "}
            <Link to={Routepath.LOGIN} className="fw-bold text-decoration-none">
              Sign in
            </Link>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SignupPage;
