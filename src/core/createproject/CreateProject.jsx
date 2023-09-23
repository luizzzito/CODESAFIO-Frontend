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
  MenuItem
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const CreateProject = () => {
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
      }}
    >
      <Card position="static" sx={{ bgcolor: "white" }}>
        <CardContent>
          <Typography>Crea tu Proyecto</Typography>
          <TextField
            label="Nombre del Proyecto"
            variant="outlined"
            sx={{ width: "60%" }}
          />
          <TextField
            label="Descripción del Proyecto"
            variant="outlined"
            sx={{ width: "60%" }}
            fullWidth={true}
          />
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Typography>Agrega un nuevo puesto al proyecto</Typography>
          <Button variant="contained">
            <IconButton>
              <AddIcon />
            </IconButton>
          </Button>
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
