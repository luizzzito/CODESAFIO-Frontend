import {  
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    DialogActions,
    MenuItem,
    TextField,
    InputLabel,
    Select,
    Typography, } from "@mui/material";
import SkillsFile from "./SkillsFile";
import ModalPopup from "../components/ModalPopup";
import { Link } from "react-router-dom";

function EditCard() {
    const handleSubmit = () => {
        console.log("hola")
    }
    const handleChange = (event) => {
        setCategory(event.target.value);
      };
  return (
    <Card sx={{ width: "90%", height: "80%", my: 4 }}>
      <CardHeader title={"Edita tu proyecto"} />
      <CardContent
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField label="Nombre del proyecto" sx={{ width: "80%" }} />
        <TextField label="Descripción del proyecto" multiline rows={4} />
        <InputLabel id="demo-simple-select-label">Dificultad del Proyecto</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Dificultad del proyecto"
            onChange={handleChange}
          >
            <MenuItem value={10}>Fácil</MenuItem>
            <MenuItem value={20}>Intermedia</MenuItem>
            <MenuItem value={30}>Difícil</MenuItem>
          </Select>
        <Typography color="#7B7B7B" sx={{ fontSize: 14, fontWeight: "500" }}>
          Agrega un nuevo puesto al proyecto
        </Typography>
        <SkillsFile skill={"hola"} level={"Avanzado"} />
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
          <Link to="/createdproject">
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

export default EditCard;
