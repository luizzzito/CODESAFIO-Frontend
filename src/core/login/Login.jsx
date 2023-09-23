import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

function Login() {
  return (
    <>
      <Box
        sx={{
          width: "full",
          height: "250px",
          WebkitClipPath: "polygon(0 0, 250% 0, 50% 80%, -150% 0)",
          backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        }}
      ></Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 300,
          justifyContent: "center",
          gap: 3,
          width: { xs: "100vw", md: 500 },
        }}
      >
        <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
          Ingresa en tu cuenta
        </Typography>
        <LoginForm />
        <Typography variant="h5" sx={{ fontSize: 16 }}>
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </Typography>
      </Container>
    </>
  );
}

export default Login;
