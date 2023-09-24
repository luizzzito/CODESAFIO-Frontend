import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";

import ModalPopup from "../components/ModalPopup";

const CreateProject = () => {
  const [category, setCategory] = useState("");
  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
    difficulty: "",
    skills: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
    setCategory(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project);
  };

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        width: "100vw",
        height: "100vh",
        pt: 7,
      }}
    >
      <Card
        position="static"
        sx={{ bgcolor: "white", width: "80%", mx: "auto" }}
      >
        <CardContent component="form" onSubmit={handleSubmit}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Crea tu Proyecto
          </Typography>
          <TextField
            label="Nombre del Proyecto"
            name="projectName"
            variant="outlined"
            sx={{ width: "100%", mx: "auto", my: 2 }}
            onChange={handleChange}
          />
          <TextField
            label="Descripción del Proyecto"
            variant="outlined"
            name="projectDescription"
            fullWidth
            rows={4}
            multiline
            onChange={handleChange}
          />
          <InputLabel id="demo-simple-select-label">
            Dificultad del Proyecto
          </InputLabel>
          <Select
            name="difficulty"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Dificultad del proyecto"
            onChange={handleChange}
          >
            <MenuItem value={1}>Fácil</MenuItem>
            <MenuItem value={2}>Intermedia</MenuItem>
            <MenuItem value={3}>Difícil</MenuItem>
          </Select>
          <Typography>Agrega un nuevo puesto al proyecto</Typography>
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
              <Button variant="outlined">CANCELAR</Button>
            </Link>
            <Button type="submit" variant="contained" sx={{ color: "white" }}>
              CREAR
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateProject;
