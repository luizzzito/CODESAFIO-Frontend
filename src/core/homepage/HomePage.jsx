import React from "react";
import Button from "@mui/material/Button";
import { logout } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);

  const logoutfunction = () => {
    dispatch(logout());
    navigate("/login")
    console.log(state)
  };

  return (
    <div>
      <Button onClick={logoutfunction}>Cerrar Sesion</Button>
    </div>
  );
};

export default HomePage;
