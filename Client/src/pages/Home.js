import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";

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

export default function Home() {
  return (
    <MainBox sx={{ flexGrow: 1 }}>
      {/* {loginuser ? ( */}
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
