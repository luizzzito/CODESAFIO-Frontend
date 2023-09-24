import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  MenuItem,
  TextField,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import createApplication from "../../services/applications/create-application.services";

function ApplyInputs() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { userToken } = useSelector((state) => state.auth);
  const [apply, setApply] = useState({
    publicationId: +id,
    applicationDescription: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setApply({ ...apply, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(apply);
    const response = await createApplication(userToken, apply);
    console.log(response);
    navigate("/homepage");
    try {
    } catch (error) {}
  };

  return (
    <Card
      sx={{ width: "90%", height: "80%", my: 4 }}
      component="form"
      onSubmit={handleSubmit}
    >
      <CardHeader title={"Aplica para el proyecto"} />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography>
          ¿Qué te hace el mejor candidato para este puesto?
        </Typography>
        <TextField
          label="Descripción"
          multiline
          rows={4}
          name="applicationDescription"
          onChange={handleChange}
        />
        <CardActions sx={{ justifyContent: "flex-end", gap: 1 }}>
          <Link to={`/detailsproject/${id}`}>
            <Button variant="outlined">Cancelar</Button>
          </Link>
          <Button variant="contained" sx={{ color: "white" }} type="submit">
            APLICAR
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default ApplyInputs;
