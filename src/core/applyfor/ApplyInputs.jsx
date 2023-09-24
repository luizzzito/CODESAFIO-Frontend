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
    InputLabel,
    Select
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  
  function ApplyInputs() {
  
      const handleSubmit = () => {
          console.log("hola")
      }
  
    const handleChange = (event) => {
        setCategory(event.target.value);
      };
    return (
      <Card sx={{ width: "90%", height: "80%", my: 4 }}>
        <CardHeader title={"Aplica para el proyecto"} />
        <CardContent
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <InputLabel id="demo-simple-select-label">Posición a aplicar</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Dificultad del proyecto"
            onChange={handleChange}
          >
            <MenuItem value={10}>Frontend</MenuItem>
            <MenuItem value={20}>Backend</MenuItem>
            <MenuItem value={30}>SQA</MenuItem>
          </Select>
          <TextField label="¿Qué te hace el mejor candidato para este puesto?" multiline rows={4} />
          <CardActions sx={{ justifyContent: "flex-end", gap: 1 }}>
            <Link to="/homepage">
              <Button variant="outlined">Cancelar</Button>
            </Link>
            <Button variant="contained" sx={{ color: "white" }}>
              APLICAR
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
  
  export default ApplyInputs;
  