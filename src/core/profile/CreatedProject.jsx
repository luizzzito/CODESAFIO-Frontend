import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import React from "react";

function CreatedProject({ title, date, status }) {
  const statusColors = new Map();
  statusColors.set("recruiting", "#42D27C");
  statusColors.set("onHold", "#DED842");
  statusColors.set("finalized", "#D24242");

  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="#7042D2" fontWeight="500">
            {title}
          </Typography>
          <Typography color="#7B7B7B">{date}</Typography>
        </Box>
        <Paper
          sx={{
            height: 30,
            px: 1,
            bgcolor: statusColors.get("recruiting"),
            color: "white",
            display: "flex",
            alignItems: "center"
          }}
        >
          hola
        </Paper>
      </Box>
      <Divider sx={{ pb: 1 }} />
    </Container>
  );
}

export default CreatedProject;
