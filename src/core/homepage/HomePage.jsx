import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid
} from "@mui/material";
import Projectcard from "./Projectcard";


function HomePage() {

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Projectcard/>
    </Box>
  );
};

export default HomePage;
