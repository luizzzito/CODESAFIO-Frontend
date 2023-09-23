import { Box } from "@mui/material";
import Navbar from "./core/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./core/login/Login";

function App() {
  return (
    <>
      <Box sx={{ bgcolor: "white", width: "100vw" }}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
