import { Box } from "@mui/material";
import CreatedProjectsCard from "./CreatedProjectsCard";
import RefreshButton from "../components/RefreshButton";

function CreatedProjects() {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        minwidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
      }}
    >
      <Box
      sx={{
        width: '100%',
        height: 40,
        position: 'relative',
        bottom: 5,
        display: 'flex',
        direction: 'column',
        justifyContent: 'end'
      }}>
      <RefreshButton/>
      </Box>
      <CreatedProjectsCard/>
    </Box>
  );
}

export default CreatedProjects;
