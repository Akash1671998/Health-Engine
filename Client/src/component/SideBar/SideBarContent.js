import { Box, ListItem, List } from "@mui/material";
import React, { useState } from "react";

import styled from "@emotion/styled";
import SideBarData from "../SideBarConfig/SideBarData";

import { NavLink, useLocation, useParams } from "react-router-dom";
import AuthenticationService from "../../pages/AuthenticationServices";
import AdminMenu from "../SideBarConfig/adminMenu";

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

  const MenuName =
    AuthenticationService.getUserName === "admin" ? AdminMenu : SideBarData;

  return (
    <>
      <MailContainer>
        <Box></Box>

        <List>
          {MenuName &&
            MenuName.map((data, index) => {
              const isActive = location.pathname === data.path;
              return (
                <NavLink key={index} to={`${data.path}/${data.name}`}>
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
      </MailContainer>
    </>
  );
}
export default SideBarContent;
