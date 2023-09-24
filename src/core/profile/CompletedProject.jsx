import { Container, Divider, Typography } from "@mui/material";
import React from "react";

function CompletedProject({ item }) {
  return (
    <Container>
      <Typography color="#7042D2" fontWeight="500">
        {item.name}
      </Typography>
      <Typography color="#7B7B7B">{item.created_at.slice(0,10)}</Typography>
      <Divider sx={{ pb: 1 }} />
    </Container>
  );
}

export default CompletedProject;
