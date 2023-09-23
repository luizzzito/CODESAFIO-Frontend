import {
  Typography,
  Card,
  CardHeader,
  Box,
  Button,
  CardContent,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UserSkills from "./UserSkills";

function ProfileCard() {
  return (
    <Card sx={{ width: "90%", height: "80%" }}>
      <CardHeader
        title={"Nombre de la persona"}
        action={
          <Button>
            <EditIcon fontSize="medium" color="primary" />{" "}
          </Button>
        }
      />
      <CardContent>
        <Typography>Descripción del usuario</Typography>
        <Typography>Ocupación</Typography>
        <Divider />
        <UserSkills />
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
