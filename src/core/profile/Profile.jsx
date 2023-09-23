import React from "react";
import {
  Card,
  CardContent,
  Box,
  Container,
  Typography,
  Divider,
} from "@mui/material";

const Profile = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#EFEFEF",
        width: "100vw",
        height: "100vh",
        pt: 7,
      }}
    >
      <Box
        sx={{
          width: "full",
          height: "250px",
          backgroundImage:
            "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        }}
      ></Box>

      <Container>
        <div>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            molestias, reiciendis corporis possimus doloremque exercitationem
            ipsa, veritatis aliquam aliquid, modi voluptate quod inventore
            veniam illo vel repellendus dignissimos ad! Facere?
          </Typography>
          <Typography>Ocupacion</Typography>
          <Divider />
          <Typography>Habilidades</Typography>
          <Divider />
          <Typography>Proyectos Completados</Typography>
          <div>
            <Typography>Proyecto</Typography>
            <Divider />
            <Typography>Fecha</Typography>
          </div>
          <Typography>Proyectos Creados</Typography>
          <div>
            <Typography>Proyecto</Typography>
            <Divider />
            <Typography>Fecha</Typography>
          </div>
        </div>
        <div>
          <Card
            position="static"
            sx={{ bgcolor: "white", width: "80%", mx: "auto", mb: 1 }}
          >
            <CardContent>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam impedit vitae corporis modi, accusamus, qui totam
                voluptatem, nemo quia veritatis optio! Laudantium, sed officia
                aperiam nisi totam incidunt rerum alias!
              </Typography>
            </CardContent>
          </Card>
          <Card
            position="static"
            sx={{ bgcolor: "white", width: "80%", mx: "auto", mb: 1 }}
          >
            <CardContent>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam impedit vitae corporis modi, accusamus, qui totam
                voluptatem, nemo quia veritatis optio! Laudantium, sed officia
                aperiam nisi totam incidunt rerum alias!
              </Typography>
            </CardContent>
          </Card>
          <Card
            position="static"
            sx={{ bgcolor: "white", width: "80%", mx: "auto", mb: 1 }}
          >
            <CardContent>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam impedit vitae corporis modi, accusamus, qui totam
                voluptatem, nemo quia veritatis optio! Laudantium, sed officia
                aperiam nisi totam incidunt rerum alias!
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Container>
  );
};

export default Profile;
