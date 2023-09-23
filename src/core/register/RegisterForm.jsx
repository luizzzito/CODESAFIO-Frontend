import TextField from "@mui/material/TextField";
import { Box, Menu } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function RegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hola");
  };
  const handleChange = (event) => {
    setOccupationValue(event.target.value);
  };
  const [loading, setLoading] = useState(false);
  const [occupationValue, setOccupationValue] = useState("");
  const [occupation, setOccupation] = useState([{ name: "", value: 0 }]);
  const [matchPassword, setMatchPassword] = useState(false);

  const occupations = [
    { name: "uno", value: 1 },
    { name: "dos", value: 2 },
  ];

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
      <TextField
        label="Nombre"
        variant="standard"
        sx={{ width: "60%" }}
        type="text"
      />
      <TextField
        label="Correo"
        variant="standard"
        sx={{ width: "60%" }}
        type="email"
      />

      <TextField
        label="Contraseña"
        variant="standard"
        sx={{ width: "60%" }}
        type="password"
      />
      <TextField
        label="Confirmar Contraseña"
        variant="standard"
        sx={{ width: "60%" }}
        type="password"
        error={matchPassword}
        helperText={matchPassword ? "Las contraseñas no coinciden" : ""}
      />
      <TextField
        label="Ocupación"
        value={occupationValue}
        onChange={handleChange}
        select
        sx={{ width: "60%", mt: 2 }}
      >
        {occupations.map((occupation) => {
          return (
            <MenuItem key={occupation.value} value={occupation.value}>
              {occupation.name}
            </MenuItem>
          );
        })}
      </TextField>
      <LoadingButton
        type="submit"
        variant="contained"
        loading={loading}
        color="triadic"
        sx={{
          width: "80%",
          mt: 2,
          py: 1.2,
          borderRadius: "5px",
          color: "white",
        }}
      >
        Regístrate
      </LoadingButton>
    </Box>
  );
}

export default RegisterForm;
