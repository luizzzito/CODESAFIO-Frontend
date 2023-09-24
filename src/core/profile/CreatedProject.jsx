import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import React from "react";

function CreatedProject({ item }) {
  const statusColors = new Map();
  statusColors.set("started", "#42D27C");
  statusColors.set("not-started", "#DED842");
  statusColors.set("finished", "#D24242");

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
    <Container>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="#7042D2" fontWeight="500">
            {item.name}
          </Typography>
          <Typography color="#7B7B7B">{item.createdAt.slice(0,10)}</Typography>
        </Box>
        <Paper
          sx={{
            height: 30,
            px: 1,
            bgcolor: statusColors.get(item.status),
            color: "white",
            display: "flex",
            alignItems: "center"
          }}
        >
          {translateStatus(item.status)}
        </Paper>
      </Box>
      <Divider sx={{ pb: 1 }} />
    </Container>
  );
}

export default CreatedProject;
