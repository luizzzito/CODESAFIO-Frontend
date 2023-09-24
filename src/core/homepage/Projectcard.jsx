import { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    Grid
} from "@mui/material";

 function Projectcard() {
    return (
        <Card sx={{ bgcolor: "white", width: '90%', my: 4 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
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
                            justifyContent: 'center'
                        }}>
                            <Typography variant="subtitle1" color={'white'}>Reclutando</Typography>
                        </Box>

                    </Grid>
                </Grid>
                <Typography color={'#7042D2'}>Usuario</Typography>
                <Typography variant="subtitle1" color={'#8C8C8C'} sx={{ marginTop: 1 }}>Descripción del proyecto</Typography>
                <Button variant="text">VER MÁS</Button>
                <ProjectCard />
            </CardContent>
        </Card>
    );
}
export default Projectcard;