import {
    Typography,
    Grid,
    Container, Box, Divider, Button
} from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

function ProjectsCard({ title, date, state }) {
    const statusColors = new Map();
    statusColors.set("recruiting", "#42D27C");
    statusColors.set("onHold", "#DED842");
    statusColors.set("finalized", "#D24242");
    return (
        <Container>
            <Grid container spacing={2}  marginTop={1}>
                <Grid item xs={7}>
                    <Typography sx={{ color: '#7042D2', fontWeight: 'bold' }}>{title}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Box
                    sx={{
                        backgroundColor: statusColors.get(state),
                        width: "auto",
                        height: 25,
                        display: 'flex',
                        direction: 'column',
                        justifyContent: 'center',
                        borderRadius: 1
                    }}
                >
                    <Typography sx={{ color: 'white ' }}>{state}</Typography>
                </Box> 
                </Grid>
            </Grid>
            <Typography sx={{ color: '#565656', marginTop: 1 }}>{date}</Typography>
            <Typography sx={{ color: '#8C8C8C', marginTop: 2 }}>Descripción del proyecto aaaaaaaaaaaaaa</Typography>
            <Grid container spacing={2}  marginTop={1}>
                <Grid item xs={7}>
                <Button variant="text">VER APLICACIONES</Button>
                </Grid>
                <Grid item xs={4}>
                <Link to="homepage">
            <EditIcon fontSize="medium" color="primary" sx={{marginLeft: 8}}/>{" "}
          </Link>
                </Grid>
            </Grid>
           
            
            <Divider sx={{ py: 1 }} />   
        </Container>
    );
}

export default ProjectsCard;
