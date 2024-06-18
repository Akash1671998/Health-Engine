import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

let SideBarData = [
  {
    icon: HomeIcon,
    name: "Home",
    path: "/",
  },
  {
    icon: ManageAccountsIcon,
    name: "Profile",
    path: "/profile",
  },
  {
    icon: DomainVerificationIcon,
    name: "Appointments",
    path: "/appointments",
  },

  {
    icon: LocalHospitalIcon,
    name: "Apply Doctor",
    path:"/apply_doctor"
  },

];
export default SideBarData;
