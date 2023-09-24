import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  DialogActions,
  DialogContentText,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SkillsPaper from "./SkillsPaper";
import { Link } from "react-router-dom";
import ModalPopup from "../../components/ModalPopup";

function EditProfileCard() {

    const handleSubmit = () => {
        console.log("hola")
    }

  return (
    <Card sx={{ width: "90%", height: "80%", my: 4 }}>
      <CardHeader title={"Perfil"} />
      <CardContent
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField label="Nombre Completo" sx={{ width: "80%" }} />
        <TextField label="Descripción Personal" multiline rows={4} />
        <TextField label="Ocupación" select sx={{ width: "80%" }} />
        <Typography color="#7B7B7B" sx={{ fontSize: 14, fontWeight: "500" }}>
          Agrega un nuevo puesto al proyecto
        </Typography>
        <SkillsPaper skill={"hola"} level={"Avanzado"} />
        <CardActions>
          <ModalPopup modalFunction={handleSubmit}>
              <DialogActions sx={{ flexDirection: "column", gap: 2 }}>
                <TextField label="Competencia" select fullWidth>
                  <MenuItem>Hola</MenuItem>
                </TextField>
                <TextField label="Nivel" size="small" select fullWidth>
                  <MenuItem>Alto xd </MenuItem>
                </TextField>
              </DialogActions>
          </ModalPopup>
        </CardActions>
        <CardActions sx={{ justifyContent: "flex-end", gap: 1 }}>
          <Link to="/profile">
            <Button variant="outlined">Cancelar</Button>
          </Link>
          <Button variant="contained" sx={{ color: "white" }}>
            Continuar
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default EditProfileCard;
