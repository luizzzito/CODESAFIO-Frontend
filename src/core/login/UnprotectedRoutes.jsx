import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UnprotectedRoutes = () => {
  const state = useSelector((state) => state.auth);

  if (state.success) return <Navigate to="/homepage" />;

  return <Outlet />;
};

export default UnprotectedRoutes;
