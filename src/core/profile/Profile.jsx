import { Box } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getUser from "../../services/users/get-user.services";

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
      }}
    >
      <ProfileCard />
    </Box>
  );
}

export default Profile;
