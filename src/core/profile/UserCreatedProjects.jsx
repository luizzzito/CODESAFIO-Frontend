import { Box, Typography } from "@mui/material";
import React from "react";
import CreatedProject from "./CreatedProject";

function UserCreatedProjects() {
  const completedProjects = [
    { id: 1, title: "Cuidar el campus", date: "12-01-2005" },
    { id: 2, title: "Cuidar el campus", date: "12-01-2005" },
    { id: 3, title: "Cuidar el campus", date: "12-01-2005" },
  ];
  return (
    <Box sx={{mt: 1}}>
      <Typography sx={{ mb: 1, fontSize: 18 }} variant="h6">
        Proyectos Completados
      </Typography>
      {completedProjects.map((project) => {
        return (
          <CreatedProject
            key={project.id}
            title={project.title}
            date={project.date}
          />
        );
      })}
    </Box>
  );
}

export default UserCreatedProjects;
