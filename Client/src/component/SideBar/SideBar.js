import { Drawer } from "@mui/material";
import SideBarContent from "./SideBarContent";

function SideBar({ openSideNav }) {
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
