import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectInfo from "./ProjectInfo";

function ProjectsApplication() {
  const ApplyProjects = [
    { id: 1, title: "Base de datos", date: "12-02-2005", state: "Aceptado" },
    { id: 2, title: "Hola", date: "4-08-2020", state: "Rechazado" },
    { id: 3, title: "Adios", date: "3-07-2018", state: "En proceso"},
  ];
  return (
    <Box sx={{mt: 1}}>
      {ApplyProjects.map((project) => {
        return (
          <ProjectInfo
            key={project.id}
            title={project.title}
            date={project.date}
            state={project.state}
          />
        );
      })}
    </Box>
  );
}

export default ProjectsApplication;
