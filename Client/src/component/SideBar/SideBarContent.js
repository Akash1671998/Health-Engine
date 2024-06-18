import { Box, ListItem, List, Button, Link, Typography } from "@mui/material";
import React, { useState } from "react";

import styled from "@emotion/styled";
import SideBarData from "../SideBarConfig/SideBarData";

import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import AuthenticationService from "../../pages/AuthenticationServices";
import AdminMenu from "../SideBarConfig/adminMenu";
import LogoutIcon from "@mui/icons-material/Logout";

const MailContainer = styled(Box)({
  padding: "8px",
  "& > ul": {
    padding: "20px 10 0 5px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    "& > a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  "& > ul > a > li > svg": {
    marginRight: "20px",
    colors: "inherit",
  },
});

function SideBarContent() {
  const [openDialog, setOpenDialog] = useState(false);
  const { type } = useParams();
  const location = useLocation();
  let navigate = useNavigate();

  const Logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const MenuName =
    AuthenticationService.getUserName() === "admin" ? AdminMenu : SideBarData;
  return (
    <>
      <MailContainer>
        <Box></Box>
        <List>
          {MenuName &&
            MenuName.map((data, index) => {
              const isActive = location.pathname === data.path;
              return (
                <NavLink key={index} to={`${data.path}`}>
                  <ListItem
                    key={index}
                    style={
                      isActive
                        ? {
                            backgroundColor: "#d3e3fd",
                            borderRadius: "0 16px 0 16px",
                          }
                        : {}
                    }
                  >
                    <data.icon fontSize="medium" />
                    {data.name}
                  </ListItem>
                </NavLink>
              );
            })}
        </List>
        <tooltip title={"logout"}>
          <ListItem
            onClick={() => Logout()}
            style={{ display: "flex", alignItems: "center", marginLeft: "4px" }}
          >
            <LogoutIcon style={{ marginRight: 5 }} />
            <Link to="/login">
              <Typography style={{ color: "red" }}>Logout</Typography>
            </Link>
          </ListItem>
        </tooltip>
      </MailContainer>
    </>
  );
}
export default SideBarContent;
