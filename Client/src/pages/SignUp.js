import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/feature/alertSlice";

const loginInitialValues = {
  username: "",
  email: "",
  password: "",
};

let BASE_URL = "http://localhost:9191/api/v1/user";

export default function SignUp() {
  const disptch = useDispatch();
  const [formData, setFormData] = useState(loginInitialValues);

  let navigate =useNavigate();

  const handleSignup = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = () => {
    disptch(showLoading());
    axios
      .post(`${BASE_URL}/register`, formData)
      .then((response) => {
        disptch(hideLoading());
        console.log("New User Register Successfully", response);
        if(response.status == 200){
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log("Error While the call register user", error);
      });
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: "70vh", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={2} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Enter UserName"
              name="username"
              autoComplete="username"
              onChange={(e) => handleSignup(e)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => handleSignup(e)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => handleSignup(e)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => register()}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
