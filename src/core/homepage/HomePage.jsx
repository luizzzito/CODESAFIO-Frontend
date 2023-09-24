import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { logout } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import ProjectsCard from "./ProjectsCard";
const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);

  const logoutfunction = () => {
    dispatch(logout());
    navigate("/login");
    console.log(state);
  };

  const testProjects = [
    {
      title: "project1",
      status: "in-progress",
      details:
        "loremipsunmsakmdklasmdklasmdasl;dasl;dkalskasopadskasfasfasfasfas;",
    },
    {
      title: "project1",
      status: "in-progress",
      details: "loremipsunmsakmdklasmdklasmdasl;dasl;dkalskasopadsk;",
    },
    {
      title: "project1",
      status: "in-progress",
      details: "loremipsunmsakmdklasmdklasmdasl;dasl;dkalskasopadsk;",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        minwidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ color: "white", mt:-5 }}>
        Descubre nuevos proyectos
      </Typography>
      <ProjectsCard project={testProjects[0]} />
      <ProjectsCard project={testProjects[1]} />
      <ProjectsCard project={testProjects[2]} />
    </Box>
  );
};

export default HomePage;
