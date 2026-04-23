import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Alert, InputGroup } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Routepath from "@routes/routes.js";
import swal from "sweetalert2";
import { useAuth } from "@context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      setError("");
      setLoading(true);
      try {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find(
          (user) => user.email === values.email && user.password === values.password
        );
        if (!existingUser) {
          throw new Error("Invalid email or password");
        }
        
        // Login user with token
        const userData = {
          firstName: existingUser.firstName,
          lastName: existingUser.lastName,
          email: existingUser.email,
        };
        
        login(userData);
        
        await new Promise((resolve) => setTimeout(resolve, 1000));
        swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have been logged in successfully.",
          showConfirmButton: false,
          timer: 1000,
        });
        // On success, redirect to home
        navigate(Routepath.HOME);
      } catch (err) {
        setError(err.message || "Login failed. Please check your credentials.");
        swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Please check your credentials and try again.",
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
          <h2 className="fw-bold"> Welcome Back </h2>
          <p className="text-muted"> Sign in to your account </p>
        </div>
        {error && <Alert variant="danger"> {error} </Alert>}
        <Form onSubmit={formik.handleSubmit}>
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
              size="lg"
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
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.password && formik.errors.password}
              required
              size="lg"
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
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <Form.Check type="checkbox" label="Remember me" />
            <Link to="#" className="text-decoration-none small">
              Forgot password?{" "}
            </Link>
          </div>

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
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </Form>

        <div className="text-center mt-4">
          <p className="text-muted mb-0">
            Don't have an account?{" "}
            <Link
              to={Routepath.SIGNUP}
              className="fw-bold text-decoration-none"
            >
              Sign up{" "}
            </Link>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LoginPage;
