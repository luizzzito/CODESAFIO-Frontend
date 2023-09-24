import { Box, Container } from "@mui/material";
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
      }}
    >
      <Container sx={{mt:-10}} iconStyle={{width:"60px", height:"60px"}}>
        <RefreshButton />
      </Container>

      <ProfileCard />
    </Box>
  );
}

export default Profile;
