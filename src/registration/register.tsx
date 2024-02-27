import React from "react";
import Navbar from "../components/Navbar";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

// Define the Register component
const Register = () => {
  // Get the user and signupUser function from the AuthContext
  const { user, signupUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Initialize the firstName, email, password, repeatPassword, and error state variables with empty strings
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  // Function to validate the password and repeatPassword
  const validatePassword = (password: string, repeatPassword: string) => {
    return password === repeatPassword;
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validPassword = validatePassword(password, repeatPassword);
    if (validPassword) {
      try {
        signupUser(email, password, firstName);
      } catch (error) {
        setError("Oops! Something went wrong. Please try again.");
      }
    } else {
      console.log("Passwords do not match");
    }
  };

  // Redirect to account page if user is logged in
  useEffect(() => {
    if (user) {
      navigate("/account");
    }
  }, [user, navigate]);

  // Function to handle firstName input change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  // Function to handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Function to handle password input change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Function to handle repeatPassword input change
  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(e.target.value);
  };

  // Return the JSX for the Register component
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <div
          style={{
            width: "300px",
            margin: "80px auto",
            padding: "60px",
            backgroundColor: "#333",
            borderRadius: "25px",
            color: "#fff",
            fontFamily: "Arial, sans-serif",
            fontSize: "20px",
          }}
        >
          <h1 style={{ textAlign: "center", margin: "10px" }}>Sign Up</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter First Name"
                value={firstName}
                onChange={handleNameChange}
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#555",
                  color: "#fff",
                  borderColor: "#777",
                  width: "90%",
                  fontSize: "20px",
                }}
              />
            </div>
            <br />
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#555",
                  color: "#fff",
                  borderColor: "#777",
                  width: "90%",
                  fontSize: "20px",
                }}
              />
            </div>
            <br />
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="***********"
                value={password}
                onChange={handlePasswordChange}
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#555",
                  color: "#fff",
                  borderColor: "#777",
                  width: "90%",
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="repeatPassword" className="form-label">
                Re-Enter Password
              </label>
              <input
                type="password"
                className="form-control"
                id="repeatPassword"
                placeholder="***********"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#555",
                  color: "#fff",
                  borderColor: "#777",
                  width: "90%",
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "100%",
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                color: "white",
                marginTop: "25px",
              }}
            >
              Sign Up
            </button>
          </form>
          <br />
          <p style={{ textAlign: "center" }}>
            <Link to="/login" style={{ color: "#007bff" }}>
              Already have an account? Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
