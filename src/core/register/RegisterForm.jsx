import TextField from "@mui/material/TextField";
import { Box, Menu } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { register } from "../../services/auth.services";

function RegisterForm() {
  const state = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    occupation: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setOccupationValue(event.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [occupationValue, setOccupationValue] = useState("");
  const [matchPassword, setMatchPassword] = useState(false);

  const occupations = [
    { name: "Estudiante", value: "student" },
    { name: "dos", value: 2 },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(user);
      const data = await register(user);
      console.log(data)
    } catch (e) {
      console.log(e);
    }
  };

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
        name="name"
        variant="standard"
        sx={{ width: "60%" }}
        type="text"
        onChange={handleChange}
      />
      <TextField
        name="email"
        label="Correo"
        variant="standard"
        sx={{ width: "60%" }}
        type="email"
        onChange={handleChange}
      />

      <TextField
        name="password"
        label="Contraseña"
        variant="standard"
        sx={{ width: "60%" }}
        type="password"
        onChange={handleChange}
      />
      <TextField
        name="passwordConfirm"
        label="Confirmar Contraseña"
        variant="standard"
        sx={{ width: "60%" }}
        type="password"
        error={matchPassword}
        onChange={handleChange}
        helperText={matchPassword ? "Las contraseñas no coinciden" : ""}
      />
      <TextField
        name="occupation"
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
