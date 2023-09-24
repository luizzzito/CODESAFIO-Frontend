import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import Skill from "../../components/Skill";

function SkillsCard({ skill, level }) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Skill skill={skill} />
      <TextField
        select
        size="small"
        label={level}
        value={level}
        sx={{ flexGrow: 1, mx: 1 }}
      />
      <IconButton size="small">
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
}

export default SkillsCard;
