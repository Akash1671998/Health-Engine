import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import AuthenticationService from "./AuthenticationServices";
import axios from "axios";
import Navbar from "../component/Navbar";
import SideBar from "../component/SideBar/SideBar";

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
  const [openSideNav,setOpenSideNav]=useState(false)

  const handleOpenSideBar = () => {
    setOpenSideNav(!openSideNav);
  };

  const handleCloseSideBar = () => {
    setOpenSideNav(false);
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
    <div>
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 999 }}>
        <Navbar handleOpenSideBar={handleOpenSideBar} openSideNav={openSideNav} />
      </div>
      <Box>
        <SideBar openSideNav={openSideNav}/>
      </Box>
      {/* <div style={{ marginTop: "60px" }}> */}
      {/* Adjust margin-top to accommodate header height */}
      {/* <SideBar setOpenSideNav={setOpenSideNav} /> */}
      {/* <Emails openSideNav={openSideNav}/> */}
      {/* <Suspense fallback={<SuspenseLoader />}>
        <Outlet />
      </Suspense> */}
      {/* </div> */}
    </div>
  );
}
