import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import getPublicationById from "../../services/publications/get-publications-by-id";
import { useSelector } from "react-redux";
import { difficulty } from "../../config";
import SkillsProject from "./SkillsProject";
import { statusColors } from "../../config";

export const DetailsProject = () => {
  const [category, setCategory] = useState("blue");
  const { id } = useParams();
  const { userToken } = useSelector((state) => state.auth);
  const [publication, setPublication] = useState({});
  const [skills, setSkills] = useState([]);

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
  
  const fetchProject = async () => {
    try {
      const { data } = await getPublicationById(userToken, id);
      setPublication(data.publication);
      setSkills(data.skills);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card position="static" sx={{ bgcolor: "white", width: "85%" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Typography variant="h6">{publication.projectName}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  width: 100,
                  height: 30,
                  backgroundColor: `${statusColors.get(publication.status)}`,
                  borderRadius: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="subtitle1" color={"white"}>
                  {translateStatus(publication.status)}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography color={"#7042D2"}>{publication.userLeadName}</Typography>
          <Typography
            variant="subtitle1"
            color={"#8C8C8C"}
            sx={{ marginTop: 1 }}
          >
            {publication.projectDescription}
          </Typography>
          <Typography
            variant="subtitle1"
            color={"#8C8C8C"}
            sx={{ marginTop: 1 }}
          >
            {publication.applicationDescription}
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={3}>
              <Typography variant="subtitle1">Dificultad</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" color={"#8C8C8C"}>
                {difficulty.get(publication.difficulty)}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
            Equipo requerido
          </Typography>
          {skills.map((skill) => {
            return (
              <Box key={skill.skillId}>
                <SkillsProject skill={skill} />
              </Box>
            );
          })}
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Link to="/homepage">
            <Button variant="text" sx={{ marginTop: 2 }}>
              REGRESAR
            </Button>
          </Link>
          <Link to={`/applyfor/${id}`}>
            <Button
              variant="contained"
              sx={{ color: "white", marginTop: 2, marginLeft: 2 }}
            >
              APLICAR
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default DetailsProject;
