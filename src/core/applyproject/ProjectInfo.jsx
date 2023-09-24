import { Typography, Grid, Container, Box, Divider } from "@mui/material";

function ProjectInfo({ name, date, status, description }) {
  const statusColors = new Map();
  statusColors.set(true, "#42D27C");
  statusColors.set(null, "#DED842");
  statusColors.set(false, "#D24242");

  function translateStatus(status) {
    switch (status) {
      case true:
        return "Aceptado";
      case false:
        return "En espera";
      case null:
        return "Rechazado";
      default:
        return status;
    }
  }

  return (
    <Container>
      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={7}>
          <Typography sx={{ color: "#333333", fontWeight: "bold" }}>
            {name}
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
            <Typography sx={{ color: "white " }}>
              {translateStatus(status)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography sx={{ color: "#565656", marginTop: 1 }}>
        {date.slice(0, 10)}
      </Typography>
      <Typography sx={{ color: "#8C8C8C", marginTop: 2 }}>
        {description}
      </Typography>
      <Box
        sx={{
          backgroundColor: "#7042D2",
          width: 100,
          height: 25,
          display: "flex",
          direction: "column",
          justifyContent: "center",
          borderRadius: 1,
          marginTop: 2,
        }}
      >
        <Typography sx={{ color: "white " }}>Frontend</Typography>
      </Box>
      <Divider sx={{ py: 1 }} />
    </Container>
  );
}

export default ProjectInfo;
