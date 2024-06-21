import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

let AdminMenu = [
  {
    icon: HomeIcon,
    name: "Home",
    path: "/",
  },
  {
    icon: LocalHospitalIcon,
    name: "Doctor",
    path: "/apply_Doctors",
  },
//   {
//     icon: PeopleIcon,
//     name: "Users",
//     path: "/users",
//   },
//   {
//     icon: AccountCircleIcon,
//     name: "Profile",
//     path: "/profile",
//   },
//   {
//     icon: LogoutIcon,
//     name: "Logout",
//     path: "/logout",
//   },
];
export default AdminMenu;
