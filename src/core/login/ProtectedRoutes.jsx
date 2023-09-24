import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const state = useSelector((state) => state.auth);

  if (!state.success) return <Navigate to="/login" />;

  return <Outlet />;
};

export default ProtectedRoutes;
