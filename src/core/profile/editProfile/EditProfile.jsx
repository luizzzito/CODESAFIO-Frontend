import { Box } from "@mui/material";
import React from "react";
import EditProfileCard from "./EditProfileCard";

function EditProfile() {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        minwidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EditProfileCard />
    </Box>
  );
}

export default EditProfile;
