import React from "react";
import Navbar from "../components/Navbar";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { db } from "../firebaseConfig";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";

const Register = () => {
  const { user, signupUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (password: string, repeatPassword: string) => {
    return password === repeatPassword;
  };

  // const handleRegister = async () => {};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validPassword = validatePassword(password, repeatPassword);
    if (validPassword) {
      try {
        const userCredential = await signupUser(email, password, firstName);
        console.log("userCredential", userCredential);
        // if (userCredential) {
        //   const uid = userCredential.uid;
        //   const path = doc(db, "users", uid);
        //   await setDoc(path, { name: firstName });
        //   console.log("User document created");
        //   // users collection / user document {name: value} / favourites subcollection
        // }
      } catch (error) {
        setError("Oops! Something went wrong. Please try again.");
      }
    } else {
      console.log("Passwords do not match");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/account");
    }
  }, [user, navigate]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

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
