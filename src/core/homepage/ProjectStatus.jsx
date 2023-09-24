import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Skill from "../components/Skill";

function ProjectStatus({ status }) {
  return (
    <Box
      sx={{
        fontSize: "18px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",width: "50%",
        }}
      >
        <Skill skill={status} />
      </Grid>
    </Box>
  );
}

export default ProjectStatus;
