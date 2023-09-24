import { Box } from "@mui/material";
import ProfileCard from "./ProfileCard";
import RefreshButton from "../components/RefreshButton";

function Profile() {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        minwidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative"
      }}
    >
      <Box sx={{position:"absolute", right:"0px", top:"0px", mt:-1}}>
        <RefreshButton />
      </Box>

      <ProfileCard />
    </Box>
  );
}

export default Profile;
