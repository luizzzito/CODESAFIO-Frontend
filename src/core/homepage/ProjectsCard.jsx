import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import ProjectStatus from "./ProjectStatus";

function ProjectsCard({ project }) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        title={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ width: "60%", fontSize: "20px" }}>
              {project.projectName}
            </Typography>
            <ProjectStatus status={project.status} />
          </Box>
        }
      />
      <CardContent sx={{ maxHeight: "100px", overflow: "hidden" }}>
        <Typography>{project.projectDescription}</Typography>
      </CardContent>
      <CardContent sx={{ my: -1.5 }}>
        <Divider />
      </CardContent>
      <CardActions>
        <Link
          to={`/detailsproject/${project.publicationId}`}
          className="project-card-button"
        >
          <Button variant="text">VER MÁS</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ProjectsCard;
