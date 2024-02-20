import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import React from "react";
import Navbar from "../components/Navbar";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

const Register = () => {
  const { user, signupUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const validatePassword = (password: string, repeatPassword: string) => {
    return password === repeatPassword;
  };

  // const handleRegister = async () => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validPassword = validatePassword(password, repeatPassword);
    if (validPassword) {
      console.log("Attempting to sign up with: ", email, password);
      signupUser(email, password);
    } else {
      console.log("Passwords do not match");
    }
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

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
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
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="repeatPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="repeatPassword"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
        <br />
        <p>
          <Link to="/login">Already have an account? Login</Link>
        </p>
      </div>
    </>
  );
};

export default Register;

// import React, { useState } from "react";
// import Navbar from "../components/Navbar";

// export const Register = (props) => {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="auth-form-container">
//         <h2>Register</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//           <label htmlFor="name">Full name</label>
//           <input
//             value={name}
//             name="name"
//             onChange={(e) => setName(e.target.value)}
//             id="name"
//             placeholder="full Name"
//           />
//           <label htmlFor="email">email</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="youremail@gmail.com"
//             id="email"
//             name="email"
//           />
//           <label htmlFor="password">password</label>
//           <input
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             type="password"
//             placeholder="********"
//             id="password"
//             name="password"
//           />
//           <button type="submit">Log In</button>
//         </form>
//         <button
//           className="link-btn"
//           onClick={() => props.onFormSwitch("login")}
//         >
//           Already have an account? Login here.
//         </button>
//       </div>
//     </>
//   );
// };
