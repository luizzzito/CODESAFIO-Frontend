import TextField from "@mui/material/TextField";
import { Box, Snackbar } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState, useEffect } from "react";
import { login } from "../../services/auth/auth.services";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginState } from "../../features/auth/authSlice";

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
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log(user);
      const data = await login(user);
      if (!data.message) {
        dispatch(loginState(data));
      }
    } catch (e) {
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={e.message}
        action={action}
      />;
    }
  }
  useEffect(() => {
    if (state.success === true) navigate('/homepage')
  }, [state.success, navigate])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 1,
        alignItems: 'center'
      }}
      component='form'
      onSubmit={handleSubmit}
    >
      <TextField
        label='Correo'
        name='email'
        variant='standard'
        sx={{ width: '70%' }}
        onChange={handleChange}
      />
      <TextField
        label='Contraseña'
        type='password'
        name='password'
        variant='standard'
        sx={{ width: '70%' }}
        fullWidth={true}
        onChange={handleChange}
      />
      <LoadingButton
        type='submit'
        variant='contained'
        loading={loading}
        color='triadic'
        sx={{
          width: '80%',
          mt: 4,
          py: 1.2,
          borderRadius: '5px',
          color: 'white'
        }}
      >
        Iniciar Sesión
      </LoadingButton>
    </Box>
  )
}

export default LoginForm
