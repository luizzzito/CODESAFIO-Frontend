import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

function Login() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 500,
        justifyContent: "center",
        gap: 3,
        width: {xs: "100vw", md: 500},
      }}
    >
      <Typography variant="h4" component="h1">
        Ingresa en tu cuenta
      </Typography>
      <LoginForm />
      <Typography variant="h6">
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
      </Typography>
    </Container>
  );
}

export default Login;
