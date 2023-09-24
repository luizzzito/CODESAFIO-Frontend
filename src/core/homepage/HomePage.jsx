import { useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import ProjectsCard from "./ProjectsCard";
import { formContext } from '../../context/formContext'

const HomePage = () => {
  const { token } = useContext(formContext)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);

  const getUserInfo = () => {
    console.log(state);
    console.log(token)
  };

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo, dispatch]);

  const testProjects = [
    {
      title: "project1",
      status: "in-progress",
      details:
        "Luis es conocido mundialmente por tener hipopotomonstrosesquipedaliofobia",
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
      <Typography variant="h5" sx={{ color: "white", mt: -5 }}>
        Descubre nuevos proyectos {console.log(state)}
      </Typography>
      <ProjectsCard project={testProjects[0]} />
      <ProjectsCard project={testProjects[1]} />
      <ProjectsCard project={testProjects[2]} />
    </Box>
  );
};

export default HomePage;
