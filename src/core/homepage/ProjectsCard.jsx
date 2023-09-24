import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Button
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {Link} from "react-router-dom";
import ProjectStatus from "./ProjectStatus";

function ProjectsCard( {project}) {
  return (
    <Card sx={{ width: "90%", my: 2 }}>
      <CardHeader
        title={project.title}
        action={
          <ProjectStatus project={project} />
        }
      />
      <CardContent sx={{maxHeight: 120}}>
        <Typography>{project.details}</Typography>
        <Link to="/detailsproject">
        <Button variant="text">VER MÁS</Button>
        </Link>
        <Divider sx={{ py: 1 }} />
      </CardContent>
    </Card>
  );
}

export default ProjectsCard;
