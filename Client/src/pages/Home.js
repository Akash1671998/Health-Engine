import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AuthenticationService from "./AuthenticationServices";
import axios from "axios";
import Navbar from "../component/Navbar";
import SideBar from "../component/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/feature/userSlice";
import { useNavigate } from "react-router-dom";

let BASE_URL = "http://localhost:9191/api/v1/user/getUserData";
export default function Home() {
  const [openSideNav, setOpenSideNav] = useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  let navigate = useNavigate();
  const handleOpenSideBar = () => {
    setOpenSideNav(!openSideNav);
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
