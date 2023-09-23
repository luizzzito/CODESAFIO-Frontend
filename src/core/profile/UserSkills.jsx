import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Skill from "../components/Skill";

function UserSkills() {
  const skills = [
    "front",
    "back",
    "uxDesigner",
    "frontend",
    "backend",
    "uxDesignerend",
  ];
  return (
    <Box>
      <Typography sx={{ mb: 1, fontSize: 18 }} variant="h6">
        Habilidades
      </Typography>
      <Grid container spacing={1}>
        {skills.map((skill) => {
          return <Skill key={skill} skill={skill} />;
        })}
      </Grid>
    </Box>
  );
}

export default UserSkills;
