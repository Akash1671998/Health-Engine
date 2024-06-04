import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
// import Images from "../Images/gmail.png";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

// Style For AppBar like Header
const StyleAppBar = styled(AppBar)({
  backgroundColor: "#F5F5F5",
  boxShadow: "non",
  "& > div > img": {
    width: "24px",
    marginLeft: "7px",
  },
  "& > div >p": {
    fontSize: "24px",
    fontWeight: "700",
    color: "black",
    marginLeft: "7px",
  },
});

// Header in show SearchBox
const SearchBox = styled(Box)({
  background: "#EAF1FB",
  marginLeft: "450px",
  borderRadius: "15px",
  minWidth: "400px",
  maxWidth: "400px",
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  padding: "0 50px",
});

// Header in show the Account and App and other Operation button
const OperationalButton = styled(Box)({
  width: "100px",
  display: "flex",
  justifyContent: "end",
  marginLeft: "400px",
  "& >svg ": {
    marginLeft: "20px",
  },
});

function Navbar({ handleOpenSideBar, openSideNav }) {
  const { user } = useSelector((state) => state.user);
  console.log("MMMMMMMMMMMMMMMMMMMM", user);
  return (
    <>
      <StyleAppBar position="static">
        <Toolbar>
          <MenuIcon
            color="action"
            onClick={() => handleOpenSideBar()}
            variant="outlined"
          />
          {/* <img src={Images} alt="logo" /> */}
          <Typography style={{display:'flex',justifyContent:'end'}}>
            <Link to="/profile">{user?.name}</Link>
          </Typography>
          <SearchBox>
            <SearchIcon color="action" />
            <InputBase
              color="action"
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search google maps" }}
            />
            <TuneIcon color="action" />
          </SearchBox>
          {/* <OperationalButton>
            <HelpOutlineOutlinedIcon color="action" />
            <SettingsOutlinedIcon color="action" />
            <AppsOutlinedIcon color="action" />
            <AccountCircleOutlinedIcon color="action" />
          </OperationalButton> */}
        </Toolbar>
      </StyleAppBar>
    </>
  );
}
export default Navbar;
