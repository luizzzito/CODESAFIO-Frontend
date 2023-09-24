import {
    Typography,
    Card,
    CardContent,
} from "@mui/material";
import CreatedProjectsFiles from "./CreatedProjectsFiles";


function CreatedProjectsCard() {
    return (
        <Card sx={{ width: "90%", height: "80%", my: 4 }}>
            <CardContent>
                <Typography variant="h6">Proyectos que has creado</Typography>
                <CreatedProjectsFiles/>     
            </CardContent>
        </Card>
    );
}

export default CreatedProjectsCard;
