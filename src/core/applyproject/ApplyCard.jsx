import {
    Typography,
    Card,
    CardContent,
} from "@mui/material";
import ProjectsApplication from "./ProjectsApplication";

function ApplyCard() {
    return (
        <Card sx={{ width: "90%", height: "80%", my: 4 }}>
            <CardContent>
                <Typography variant="h6">Proyectos a los que has aplicado</Typography>
                <ProjectsApplication/>     
            </CardContent>
        </Card>
    );
}

export default ApplyCard;
