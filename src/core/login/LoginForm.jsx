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
      <TextField label="Correo" variant="standard" sx={{ width: "60%" }} />
      <TextField
        label="Contraseña"
        variant="standard"
        sx={{ width: "60%" }}
        fullWidth={true}
      />
      <LoadingButton
        type="submit"
        variant="contained"
        loading={loading}
        color="triadic"
        sx={{width:"80%", mt: 4, py: 1.2,borderRadius:"5px" ,color:"white" }}
        
      >
        Iniciar Sesión
      </LoadingButton>
    </Box>
  );
}

export default LoginForm;
