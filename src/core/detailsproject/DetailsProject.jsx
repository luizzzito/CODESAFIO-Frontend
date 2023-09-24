import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid
} from "@mui/material";
import { Link } from "react-router-dom";


export const DetailsProject = () => {
  const [category, setCategory] = useState("blue");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card position="static" sx={{ bgcolor: "white" }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Typography variant="h6">Nombre Proyecto</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{
                            width: 100,
                            height: 30,
                            backgroundColor: '#42D27C',
                            borderRadius: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Typography variant="subtitle1" color={'white'}>Reclutando</Typography>
                        </Box>

                    </Grid>
                </Grid>
                <Typography color={'#7042D2'}>Usuario</Typography>
                <Typography variant="subtitle1" color={'#8C8C8C'} sx={{ marginTop: 1 }}>Descripción del proyecto</Typography>
                <Grid container spacing={2} sx={{ marginTop: 1 }}>
                    <Grid item xs={3}>
                        <Typography variant="subtitle1">Dificultad</Typography>
                    </Grid>
                    <Grid item xs={4}>
                            <Typography variant="subtitle1" color={'#8C8C8C'}>Media</Typography>

                    </Grid>
                </Grid>
                <Typography variant="subtitle1" sx={{ marginTop: 1 }}>Equipo requerido</Typography>
                <Grid container spacing={3}>
                <Grid item xs={5}>
                        <Box sx={{
                            width: 'auto',
                            height: 30,
                            backgroundColor: '#7042D2',
                            borderRadius: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography variant="subtitle2" color={'white'}>Frontend</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={2}>
                            <Typography variant="subtitle1" color={'#8C8C8C'}>X2</Typography>
                    </Grid>
                    <Grid item xs={2}>
                            <Typography variant="subtitle1" color={'#8C8C8C'}>Avanzado</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{paddingTop:1}}>
                <Grid item xs={5}>
                        <Box sx={{
                            width: 'auto',
                            height: 30,
                            backgroundColor: '#7042D2',
                            borderRadius: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography variant="subtitle2" color={'white'}>UX Designer</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={2}>
                            <Typography variant="subtitle1" color={'#8C8C8C'}>X1</Typography>
                    </Grid>
                    <Grid item xs={2}>
                            <Typography variant="subtitle1" color={'#8C8C8C'}>Avanzado</Typography>
                    </Grid>
                </Grid>
                <Link to="/homepage">
                <Button variant="text" sx={{marginTop:2}}>REGRESAR</Button>
                </Link>
                        <Link to="/applyfor">
          <Button variant="contained" sx={{ color: "white", marginTop:2 , marginLeft: 2 }}>
            APLICAR
          </Button>
          </Link> 

            </CardContent>
        </Card>
    </Box>
  );
};

export default DetailsProject;
