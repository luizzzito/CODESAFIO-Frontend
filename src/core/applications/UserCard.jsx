import {
    Typography,
    Grid,
    Container, Divider, Button
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";

function UserCard({ title }) {
    return (
        <Container>
            <Typography sx={{ color: '#7042D2', marginTop: 1 }}>{title}</Typography>
            <Typography sx={{ color: '#8C8C8C', marginTop: 2 }}>Posición</Typography>
            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={5}>
                    <Link to="/profile">
                    <Button variant="text">VER PERFIL</Button>
                    </Link>
                </Grid>
                <Grid item xs={7}>
                    <Button variant="outlined">X</Button>
                    <Button variant="contained" sx={{ color: "white" , marginLeft: 2}}>
                        <CheckIcon/>
                    </Button>
                </Grid>
            </Grid>


            <Divider sx={{ py: 1 }} />
        </Container>
    );
}

export default UserCard;
