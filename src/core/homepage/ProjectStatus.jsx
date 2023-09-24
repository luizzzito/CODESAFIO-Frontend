import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import { statusColors } from "../../config";

function ProjectStatus({ status }) {

  function translateStatus(status) {
    switch (status) {
      case "started":
        return "Comenzado";
      case "not-started":
        return "Por Iniciar";
      case "finished":
        return "Finalizado";
      default:
        return status;
    }
  }
  return (
    <Box
      sx={{
        fontSize: "16px",
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
          alignItems: "center",
          width: "50%",
        }}
      >
        <Grid item xs="auto">
          <Paper sx={{ bgcolor: `${statusColors.get(status)}`, color: "white", py: "3px", px: 1 }}>
            {translateStatus(status)}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectStatus;
