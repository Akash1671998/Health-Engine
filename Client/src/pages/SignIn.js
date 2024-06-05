import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import AuthenticationService from "./AuthenticationServices";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/feature/alertSlice";

const defaultTheme = createTheme();
const loginInitialValues = {
  username: "",
  password: "",
};

// Base URL
let BASE_URL = "http://localhost:9191/api/v1/user";

export default function SignIn() {
  const Navigate = useNavigate();
  const disptch = useDispatch();
  const [formData, setFormData] = useState(loginInitialValues);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
    status: "",
    vertical: "bottom",
    horizontal: "right",
  });

  const goToRegister = () => {
    Navigate("/register");
  };

  const handleSignup = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      disptch(showLoading());
      const response = await axios.post(`${BASE_URL}/login`, formData);
      AuthenticationService.storeAuthenticationDetails(
        response.data.data.token,
        response.data.data.username
      );
      disptch(hideLoading());
      if (response.status == 200) {
        Navigate("/");
      }
    } catch (error) {
      disptch(hideLoading());
      console.error(
        "Error during login:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", justifyContent: "center" }}
      >
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Enter Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(e) => handleSignup(e)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => handleSignup(e)}
              />
              <Button
                fullWidth
                variant="contained"
                onClick={() => login()}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Grid item>
                <Link onClick={() => goToRegister()} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
