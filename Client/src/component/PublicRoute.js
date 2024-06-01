import { Navigate } from "react-router-dom";
import AuthenticationService from "../pages/AuthenticationServices";

export default function PublicRoute({ children }) {
  let AuthToken = AuthenticationService.getAuthenticationToken();

  if (AuthToken) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
