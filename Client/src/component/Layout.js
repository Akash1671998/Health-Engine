import React, { Children, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AuthenticationService from "../pages/AuthenticationServices";
import axios from "axios";
import Navbar from "./Navbar";
import SideBar from "./SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/feature/userSlice";
import { useNavigate } from "react-router-dom";

let BASE_URL = "http://localhost:9191/api/v1/user/getUserData";
export default function Layout({ children }) {
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
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    if (!user) {
      getUserData();
    }
  }, [user, getUserData]);
  return (
    <div>
      <Box style={{ position: "fixed", top: 0, width: "100%", zIndex: 999 }}>
        <Navbar
          handleOpenSideBar={handleOpenSideBar}
          openSideNav={openSideNav}
        />
      </Box>
      <Box style={{ marginTop: "90px", marginLeft: "230px" }}>
        <SideBar openSideNav={openSideNav} />
      </Box>
      <Box
        style={{
          marginTop: "90px",
          marginLeft: openSideNav ? "210px" : "20px",
          borderRadius: 10,
        }}
      >
        {children}
      </Box>
    </div>
  );
}
