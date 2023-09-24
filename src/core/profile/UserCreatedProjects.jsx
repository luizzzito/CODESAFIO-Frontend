import { Box, Typography } from "@mui/material";
import React from "react";
import CreatedProject from "./CreatedProject";

function UserCreatedProjects({ createdProjects }) {
  const viewCreatedProjects = () => {
    console.log();
    return createdProjects.map((item) => <CreatedProject item={item} />);
  };
  return (
    <Box sx={{ mt: 1 }}>
      <Typography sx={{ mb: 1, fontSize: 18 }} variant="h6">
        Proyectos Creados
      </Typography>
      {createdProjects.length === 0 ? (
        <Typography sx={{ color: "gray" }}>
          No has creado proyectos... (￣ρ￣)..zzZZ
        </Typography>
      ) : (
        viewCreatedProjects()
      )}
    </Box>
  );
}

export default UserCreatedProjects;
