import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hola");
  };
  const [loading, setLoading] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 1,
        alignItems: "center",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField label="Correo" variant="standard" sx={{ width: "80%" }} />
      <TextField
        label="Contraseña"
        variant="standard"
        sx={{ width: "80%" }}
        fullWidth={true}
      />
      <LoadingButton
        type="submit"
        variant="contained"
        loading={loading}
        sx={{ mt: 3, py: 1.2 }}
        fullWidth={true}
      >
        Iniciar Sesión
      </LoadingButton>
    </Box>
  );
}

export default LoginForm;
