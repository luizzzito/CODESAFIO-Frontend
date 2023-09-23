import { Card, CardContent, CardHeader, TextField } from "@mui/material";
import React from "react";

function EditProfileCard() {
  return (
    <Card sx={{ width: "90%", height: "80%", my: 4 }}>
      <CardHeader title={"Perfil"} />
      <CardContent
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField label="Nombre Completo" />
        <TextField label="Descripción Personal" multiline rows={4} />
        <TextField label="Ocupación" select />
      </CardContent>
    </Card>
  );
}

export default EditProfileCard;
