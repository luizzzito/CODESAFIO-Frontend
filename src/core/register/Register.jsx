import {Box} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <>
      <Box
        sx={{
          width: "full",
          height: "250px",
          WebkitClipPath: "polygon(0 0, 250% 0, 50% 80%, -150% 0)",
          backgroundImage:
            "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        }}
      ></Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 375,
          justifyContent: "center",
          gap: 0,
          width: { xs: "100vw", md: 500 },
          mb: 10
        }}
      >
        <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
          Regístrate
        </Typography>
        <RegisterForm />
        <Typography variant="h5" sx={{ fontSize: 16, mt: 2 }}>
          ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
        </Typography>
      </Container>
    </>
  );
}

export default Register;
