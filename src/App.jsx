import { Box } from "@mui/material";
import Navbar from "./core/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./core/login/Login";
import CreateProject from "./core/createproject/CreateProject";
import Register from "./core/register/Register";
import ModalPopup from "./core/components/ModalPopup";
import Profile from "./core/profile/Profile";
import HomePage from "./core/homepage/HomePage";
import EditProfile from "./core/profile/editProfile/EditProfile";
import ApplyProject from "./core/applyproject/ApplyProject";
import CreatedProjects from "./core/createdprojects/CreatedProjects";

function App() {
  return (
    <>
      <Box sx={{ bgcolor: "white", width: "100vw" }}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-project/confirm" element={<ModalPopup />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/editProfile" element={<EditProfile />} />
          <Route path="/applyproject" element={<ApplyProject />} />
          <Route path="/createdproject" element={<CreatedProjects />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
