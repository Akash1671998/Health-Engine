import { Drawer } from "@mui/material";
import SideBarContent from "./SideBarContent";
// import { useMailContexController } from "../context";
import { useState } from "react";

function SideBar({ openSideNav }) {
  //   const [controller, dispatch] = useMailContexController();
  //   const {openSideNav} = controller;
  //   const [openSideNav,setOpenSideNav]=useState(true)
  return (
    <>
      <Drawer
        anchor="left"
        open={openSideNav}
        onClose={""}
        hideBackdrop={true}
        ModalProps={{
          keepMounted: "true",
        }}
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            marginTop: "80px",
            width: "200px",
            background: "#F5F5F5",
            borderRight: "non",
            height: "calc(100vh-70px)",
          },
        }}
      >
        <SideBarContent />
      </Drawer>
    </>
  );
}
export default SideBar;
