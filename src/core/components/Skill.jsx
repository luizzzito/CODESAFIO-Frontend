import { Grid, Paper } from "@mui/material";
import React from "react";

function Skill({ skill }) {
  return (
    <Grid item xs="auto">
      <Paper sx={{ bgcolor: "#7042D2", color: "white", py: "1px", px: 1 }}>
        {skill.skillName}
      </Paper>
    </Grid>
  );
}

export default Skill;
