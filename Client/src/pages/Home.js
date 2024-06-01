import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import AuthenticationService from "./AuthenticationServices";
import axios from "axios";

const MainBox = styled(Box)({
  height: "100vh",
  backdropFilter: "#DCDCDC",
});

const ChatHeader = styled(AppBar)({
  height: "120px",
  boxShadow: "none",
  backgroundColor: "#1976d2",
});
const Header = styled(AppBar)({
  height: "220px",
  boxShadow: "none",
  // backgroundColor:'#00bfa5',
});

let BASE_URL = "http://localhost:9191/api/v1/user/getUserData";
export default function Home() {
  const logout = () => {
    AuthenticationService.logout();
  };

  const getUserData = () => {
    let token = AuthenticationService.getAuthenticationToken();
    axios.post(
      `${BASE_URL}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <MainBox sx={{ flexGrow: 1 }}>
      <Button onClick={() => logout()}>LogOut</Button>
      <>
        <ChatHeader position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
          </Toolbar>
        </ChatHeader>
        {/* <Chatting /> */}
      </>
      <>
        <Header position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" color="inherit" component="div">
              {/* <UserLogin /> */}
            </Typography>
          </Toolbar>
        </Header>
      </>
    </MainBox>
  );
}
