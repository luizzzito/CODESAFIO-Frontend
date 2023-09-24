import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {Link} from "react-router-dom";
import ProjectStatus from "./ProjectStatus";

function ProjectsCard( {project}) {
  return (
    <Card sx={{ width: "90%", height: "80%", my: 2 }}>
      <CardHeader
        title={project.title}
        action={
          <ProjectStatus />
        }
      />
      <CardContent>
        <Typography>{project.details}</Typography>
        <Divider sx={{ py: 1 }} />
      </CardContent>
    </Card>
  );
}

export default ProjectsCard;
