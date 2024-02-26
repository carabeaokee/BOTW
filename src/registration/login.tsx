import React from "react";
import { AuthContext } from "../components/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "../components/css/login.css";
import Navbar from "../components/Navbar";

const Login = () => {
  const { user, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Attempting to sign in with: ", email, password);
    loginUser(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/account");
    }
  }, [user, navigate]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <div
          style={{
            width: "300px",
            margin: "90px auto",
            padding: "50px",
            backgroundColor: "#333",
            borderRadius: "25px",
            color: "#fff",
            fontFamily: "Arial, sans-serif",
            fontSize: "20px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Sign In</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
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
              Sign In
            </button>
          </form>

          <p style={{ textAlign: "center" }}>
            <Link to="/register" style={{ color: "#007bff" }}>
              Don't have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
