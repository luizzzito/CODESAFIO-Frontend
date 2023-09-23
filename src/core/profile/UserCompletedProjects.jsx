import { Box, Typography } from "@mui/material";
import React from "react";
import CompletedProject from "./CompletedProject";

function UserCompletedProjects() {
  const completedProjects = [
    { id: 1, title: "Cuidar el campus", date: "12-01-2005" },
    { id: 2, title: "Cuidar el campus", date: "12-01-2005" },
    { id: 3, title: "Cuidar el campus", date: "12-01-2005" },
  ];
  return (
    <Box>
      <Typography sx={{mb: 1, fontSize: 18}} variant="h6">Proyectos Completados</Typography>
      {completedProjects.map((project) => {
        return (
          <CompletedProject
            key={project.id}
            title={project.title}
            date={project.date}
          />
        );
      })}
    </Box>
  );
}

export default UserCompletedProjects;
