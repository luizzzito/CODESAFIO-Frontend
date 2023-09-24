import {
  Typography,
  Grid,
  Container,
  Box,
  Divider,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

function ProjectsCard({ title, date, status, description }) {
  const statusColors = new Map();
  statusColors.set("started", "#42D27C");
  statusColors.set("not-started", "#DED842");
  statusColors.set("finished", "#D24242");

  function translateStatus(status) {
    switch (status) {
      case "started":
        return "Comenzado";
      case "not-started":
        return "Por Iniciar";
      case "finished":
        return "Finalizado";
      default:
        return status;
    }
  }

  return (
    <Container>
      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={7}>
          <Typography sx={{ color: "#7042D2", fontWeight: "bold" }}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: statusColors.get(status),
              width: "auto",
              height: 25,
              display: "flex",
              direction: "column",
              justifyContent: "center",
              borderRadius: 1,
            }}
          >
            <Typography sx={{ color: "white " }}>{translateStatus(status)}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography sx={{ color: "#565656", marginTop: 1 }}>
        {date.slice(0, 10)}
      </Typography>
      <Typography sx={{ color: "#8C8C8C", marginTop: 2 }}>
        {description}
      </Typography>
      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={7}>
          <Button variant="text">VER APLICACIONES</Button>
        </Grid>
        <Grid item xs={4}>
          <Link to="/homepage">
            <EditIcon
              fontSize="medium"
              color="primary"
              sx={{ marginLeft: 8 }}
            />{" "}
          </Link>
        </Grid>
      </Grid>

      <Divider sx={{ py: 1 }} />
    </Container>
  );
}

export default ProjectsCard;
