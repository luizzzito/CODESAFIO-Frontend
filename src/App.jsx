import { Box } from "@mui/material";
import Navbar from "./core/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./core/login/Login";
import CreateProject from "./core/createproject/CreateProject";
import ModalPopup from "./core/components/ModalPopup";
import Profile from "./core/profile/Profile";

function App() {
  return (
    <>
      <Box sx={{ bgcolor: "white", width: "100vw" }}>
        {/*<Navbar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/create-project/confirm" element={<ModalPopup />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
