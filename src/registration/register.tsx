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
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {};

  return (
    <>
      <Navbar />
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Register</Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Login</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
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
