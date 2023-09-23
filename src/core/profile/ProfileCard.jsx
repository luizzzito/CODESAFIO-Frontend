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

function ProfileCard() {
  return (
    <Card sx={{ width: "90%", height: "80%", my: 4 }}>
      <CardHeader
        title={"Nombre de la persona"}
        action={
          <Link to="editProfile">
            <EditIcon fontSize="medium" color="primary" />{" "}
          </Link>
        }
      />
      <CardContent>
        <Typography>Descripción del usuario</Typography>
        <Typography>Ocupación</Typography>
        <Divider sx={{ py: 1 }} />
        <UserSkills />
        <Divider sx={{ py: 1 }} />
        <UserCompletedProjects />
        <UserCreatedProjects />
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
