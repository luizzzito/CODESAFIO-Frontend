import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Skill from "../components/Skill";

function ProjectStatus() {
  const statuses = [
    "in-progress",
  ];
  return (
    <Box>
      <Grid container spacing={1}>
        {statuses.map((status) => {
          return <Skill key={status} skill={status} />;
        })}
      </Grid>
    </Box>
  );
}

export default ProjectStatus;
