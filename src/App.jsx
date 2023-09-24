import Navbar from "./core/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./core/login/Login";
import { Box } from "@mui/material";
import CreateProject from "./core/createproject/CreateProject";
import Register from "./core/register/Register";
import ModalPopup from "./core/components/ModalPopup";
import Profile from "./core/profile/Profile";
import HomePage from "./core/homepage/HomePage";
import EditProfile from "./core/profile/editProfile/EditProfile";
import ApplyProject from "./core/applyproject/ApplyProject";
import UnprotectedRoutes from "./core/login/UnprotectedRoutes";
import ProtectedRoutes from "./core/login/ProtectedRoutes";
import { useSelector } from "react-redux";
import DetailsProject from "./core/detailsproject/DetailsProject";
import CreatedProjects from "./core/createdprojects/CreatedProjects";
import Applications from "./core/applications/Applications";
import EditProject from "./core/editproject/EditProject";

function App() {
  const state = useSelector((state) => state.auth);
  return (
    <>
      <Box sx={{ bgcolor: "white", width: "100vw" }}>
        {state.success && <Navbar />}
        <Routes>
          <Route path="/" element={<UnprotectedRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/editProfile" element={<EditProfile />} />
            <Route path="/applyproject" element={<ApplyProject />} />
            <Route path="/detailsproject" element={<DetailsProject />} />
            <Route path="/createdproject" element={<CreatedProjects />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/editproject" element={<EditProject />} />
          </Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
