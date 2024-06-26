import React, { Children, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AuthenticationService from "./AuthenticationServices";
import axios from "axios";
import Navbar from "../component/Navbar";
import SideBar from "../component/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/feature/userSlice";
import { useNavigate } from "react-router-dom";
import Layout from "../component/Layout";

let BASE_URL = "http://localhost:9191/api/v1/user/getUserData";
export default function Home({ children }) {
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
        }else {
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
      <Layout>
        {children}
      </Layout>
    </div>
  );
}
