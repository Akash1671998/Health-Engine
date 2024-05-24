import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
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

const defaultTheme = createTheme();

const loginInitialValues = {
  username: "",
  password: "",
};

export default function SignIn() {

  const [formData, setFormData] = useState(loginInitialValues);

  const Navigate = useNavigate();
  const handleSignup = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let BASE_URL = "http://localhost:9191/api/v1/user";
  const login = () => {
    axios
      .post(`${BASE_URL}/login`, formData)
      .then((response) => {
        console.log("New User Register Successfully", response);
        if (response.status == 200) {
          Navigate("/");
        }
      })
      .catch((error) => {
        console.log("Error While the call register user", error);
      });
  };

  const goToRegister = () => {
    Navigate("/register");
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => login()}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="/register" variant="body2">
                   New User
                  </Link> */}
                </Grid>
                <Grid item>
                  <Link onClick={() => goToRegister()} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}