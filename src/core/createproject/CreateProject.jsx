import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import ModalPopup from "../components/ModalPopup";

const CreateProject = () => {
  const [category, setCategory] = useState("blue");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        width: "100vw",
        height: "100vh",
        pt:7,
      }}
    >
      <Card position="static" sx={{ bgcolor: "white", width:"80%", mx:"auto"}}>
        <CardContent>
          <Typography variant="h5" sx={{fontWeight:"bold", mb:1}}>Crea tu Proyecto</Typography>
          <TextField
            label="Nombre del Proyecto"
            variant="outlined"
            sx={{ width: "100%", mx:"auto", my:2 }}
          />
          <TextField
            label="Descripción del Proyecto"
            variant="outlined"
            fullWidth
            rows={4}
            multiline
          />
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
          <Typography>Agrega un nuevo puesto al proyecto</Typography>
          <ModalPopup />
          <Button variant="outlined">Cancelar</Button>
          <Button variant="contained" sx={{ color: "white" }}>
            Crear
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateProject;
