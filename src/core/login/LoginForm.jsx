import {TextField} from "@mui/material";
import { Box, Snackbar, IconButton, InputAdornment,  } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState, useEffect } from "react";
import { login } from "../../services/auth/auth.services";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginState } from "../../features/auth/authSlice";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const state = useSelector((state) => state.auth);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const data = await login(user);
      if (!data.message) {
        localStorage.setItem("loggedUser", JSON.stringify(data));
        dispatch(loginState(data));
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (state.success === true) navigate("/homepage");
  }, [state.success, navigate]);

  const [showPassword, setShowPassword] = useState(false)
  const EndAdorment =( {showPassword, setShowPassword}) =>{
    return(
      <InputAdornment position='end'>
        <IconButton onClick={()=> setShowPassword(!showPassword)}>
          {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
        </IconButton>
      </InputAdornment>
    )
  }

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
        label="Correo"
        name="email"
        variant="standard"
        sx={{ width: "70%" }}
        onChange={handleChange}
      />
      <TextField
        label="Contraseña"
        type={showPassword ? 'text': 'password'}
        name="password"
        variant="standard"
        sx={{ width: "70%" }}
        fullWidth={true}
        onChange={handleChange}
        InputProps={{
          endAdornment: <EndAdorment showPassword={showPassword} setShowPassword={setShowPassword}/>,
        }}
      />
      <LoadingButton
        type="submit"
        variant="contained"
        loading={loading}
        color="triadic"
        sx={{
          width: "80%",
          mt: 4,
          py: 1.2,
          borderRadius: "5px",
          color: "white",
        }}
      >
        Iniciar Sesión
      </LoadingButton>
    </Box>
  );
}

export default LoginForm;
