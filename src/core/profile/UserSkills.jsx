import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Skill from "../components/Skill";

function UserSkills() {
  const skills = ["front", "back", "uxDesigner", "front", "back", "uxDesigner"];
  return (
    <Box>
      <Typography>Habilidades</Typography>
      <Grid container spacing={1}>
        {skills.map((skill) => {
          return <Skill skill={skill} />;
        })}
      </Grid>
    </Box>
  );
}

export default UserSkills;
