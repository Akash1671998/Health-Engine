import { Navigate } from "react-router-dom";
import AuthenticationService from "../pages/AuthenticationServices";

export default function ProtectedRoute({ children }) {
  let AuthToken = AuthenticationService.getAuthenticationToken();

  if (AuthToken) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
