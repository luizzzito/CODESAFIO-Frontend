import { Box, Typography } from "@mui/material";
import React from "react";
import CompletedProject from "./CompletedProject";

function UserCompletedProjects({ completedProjects }) {
  const reviewProjects = () => {
    return completedProjects.map((item) => {
      return <CompletedProject key={item.publicationId} item={item} />;
    });
  };
  return (
    <Box>
      <Typography sx={{ mb: 1, fontSize: 18 }} variant="h6">
        Proyectos Completados
      </Typography>
      {completedProjects.length === 0 ? (
        <Typography sx={{ color: "gray" }}>
          No has completado proyectos o(TヘTo){" "}
        </Typography>
      ) : (
        reviewProjects()
      )}
    </Box>
  );
}

export default UserCompletedProjects;
