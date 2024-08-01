import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  console.log("🚀 ~ ProtectedRoute ~ token:", token);
  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  } else {
    <Navigate to={"/"} replace={true} />;
    return children;
  }
};

export default ProtectedRoute;
