import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UserSkills from "./UserSkills";
import UserCompletedProjects from "./UserCompletedProjects";
import UserCreatedProjects from "./UserCreatedProjects";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import getUser from "../../services/users/get-user.services";

function ProfileCard() {
  const { userToken, userID } = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    name: "",
    personalDescription: "",
    occupation: "",
    skills: [],
    publications: [],
    collaborators: [],
  });

  function translateOccupation(occupation) {
    switch (occupation) {
      case "student":
        return "Estudiante";
      case "graduated":
        return "Egresado";
      case "teacher":
        return "Profesor";
      default:
        return occupation;
    }
  }

  const getUserInfo = useCallback(async () => {
    try {
      const data = await getUser(userToken, userID);
      setUser(data);
      console.log(data)
      console.log(user);
    } catch (e) {
      console.log(e.message);
    }
  }, [userToken]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <Card sx={{ width: "90%", height: "80%", my: 4 }}>
      <CardHeader
        title={user.name}
        sx={{ fontWeight: "bold" }}
      />
      <CardContent>
        <Typography
          variant="h5"
          sx={{ mt: -2, mb: 2, color: "gray", fontSize: 18 }}
        >
          {(user.personalDescription === (null) || user.personalDescription === "")
            ? "No existe descripción o(〒﹏〒)o "
            : user.personalDescription}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Ocupación: {translateOccupation(user.occupation)}
        </Typography>
        <Divider sx={{ py: 1 }} />
        
        <UserSkills skills={user.skills} />
        <Divider sx={{ py: 1 }} />
        <UserCompletedProjects completedProjects={user.collaborators} />
        <UserCreatedProjects createdProjects={user.publications} />
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
