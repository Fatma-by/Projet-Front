import { Navigate } from "react-router-dom";

export const Public = ({ children }) => {
  console.log(document.cookie.split("=")[1]);
  if (document.cookie.split("=")[1]) return <Navigate to="/" />;
  else return <>{children}</>;
};














