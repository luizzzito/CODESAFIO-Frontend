import { Container, Divider, Typography } from "@mui/material";
import React from "react";

function CompletedProject({ title, date }) {
  return (
    <Container>
      <Typography color="#7042D2" fontWeight="500">
        {title}
      </Typography>
      <Typography color="#7B7B7B">{date}</Typography>
      <Divider sx={{ pb: 1 }} />
    </Container>
  );
}

export default CompletedProject;
