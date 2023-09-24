import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { skillLevel } from "../../config";

function SkillsProject({ skill }) {
  return (
    <Grid container spacing={3} sx={{ paddingTop: 1 }} key={skill.skillId}>
      <Grid item xs={5}>
        <Box
          sx={{
            width: "auto",
            height: 30,
            backgroundColor: "#7042D2",
            borderRadius: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle2" color={"white"}>
            {skill.skillName}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1" color={"#8C8C8C"}>
          X{skill.quantity}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1" color={"#8C8C8C"}>
          {skillLevel.get(skill.level)}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SkillsProject;
