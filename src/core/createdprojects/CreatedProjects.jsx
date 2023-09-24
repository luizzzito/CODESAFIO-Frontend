import { Box } from "@mui/material";
import CreatedProjectsCard from "./CreatedProjectsCard";

function CreatedProjects() {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        minwidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <CreatedProjectsCard/>
    </Box>
  );
}

export default CreatedProjects;
