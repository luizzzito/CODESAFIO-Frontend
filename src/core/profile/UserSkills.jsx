import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Skill from "../components/Skill";

function UserSkills( {skills} )  {
  return (
    <Box>
      <Typography sx={{ mb: 1, fontSize: 18 }} variant="h6">
        Habilidades
      </Typography>
      <Grid container spacing={1}>
        {skills.map((item) => {
          return <Skill skill={item} />;
        })}
      </Grid>
    </Box>
  );
}

export default UserSkills;
