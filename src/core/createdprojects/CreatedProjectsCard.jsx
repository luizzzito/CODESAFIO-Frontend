import { Typography, Card, CardContent, Box, Button, IconButton } from "@mui/material";
import CreatedProjectsFiles from "./CreatedProjectsFiles";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
function CreatedProjectsCard() {
  return (
    <Card sx={{ width: "90%", height: "80%", my: 4 }}>
      <CardContent>
        <Typography variant="h6">Proyectos que has creado</Typography>
        <CreatedProjectsFiles />
        <Box sx={{ display: "flex", justifyContent: "center", mt:3 }}>
          <Button variant="contained">
            <Link to="/create-project">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Link>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CreatedProjectsCard;
