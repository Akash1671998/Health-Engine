import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import AuthenticationService from "./AuthenticationServices";
import axios from "axios";
import Navbar from "../component/Navbar";
import SideBar from "../component/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/feature/userSlice";
import { useNavigate } from "react-router-dom";

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
  const [openSideNav, setOpenSideNav] = useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log("MMMMMMMMMMMMMMMMMMMM", user);
  let navigate = useNavigate();

  const handleOpenSideBar = () => {
    setOpenSideNav(!openSideNav);
  };

  const handleCloseSideBar = () => {
    setOpenSideNav(false);
  };

  const getUserData = () => {
    const token = AuthenticationService.getAuthenticationToken();
    return axios
      .post(
        `${BASE_URL}`,
        {},
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(setUser(response.data.data));
        } else {
          navigate("/login");
          AuthenticationService.ClearSision();
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        AuthenticationService.ClearSision();
      });
  };

  useEffect(() => {
    if (!user) {
      getUserData();
    }
  }, [user, getUserData]);
  return (
    <div>
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 999 }}>
        <Navbar
          handleOpenSideBar={handleOpenSideBar}
          openSideNav={openSideNav}
        />
      </div>
      <Box>
        <SideBar openSideNav={openSideNav} />
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
