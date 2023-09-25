import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import UserFiles from "./UserFiles";
import RefreshButton from "../components/RefreshButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPublicationById from "../../services/publications/get-publications-by-id";
import { useSelector } from "react-redux";
import getCollaboratorsByProject from "../../services/collaborators/get-collaborator-to-my-project.services";

function Applications() {
  const statusColors = new Map();
  statusColors.set("recruiting", "#42D27C");
  statusColors.set("onHold", "#DED842");
  statusColors.set("finalized", "#D24242");

  const { userToken, userID } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [publication, setPublication] = useState({});
  const [collaborators, setCollaborators] = useState([]);

  const fetchProject = async () => {
    try {
      const { data } = await getPublicationById(userToken, id);
      setPublication(data.publication);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCollaborators = async () => {
    try {
      const data = await getCollaboratorsByProject(userToken, id);
      setCollaborators(data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProject();
    fetchCollaborators();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        minwidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 40,
          position: "relative",
          bottom: 5,
          display: "flex",
          direction: "column",
          justifyContent: "end",
        }}
      >
        <RefreshButton />
      </Box>
      <Card sx={{ width: "90%", height: "80%", my: 4 }}>
        <CardContent>
          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={7}>
              <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                {publication.projectName}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  backgroundColor: statusColors.get("recruiting"),
                  width: "auto",
                  height: 25,
                  display: "flex",
                  direction: "column",
                  justifyContent: "center",
                  borderRadius: 1,
                }}
              >
                <Typography sx={{ color: "white " }}>Recruiting</Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="subtitle2" sx={{ marginTop: 2, fontSize: 17 }}>
            Aplicaciones
          </Typography>
          <UserFiles
            collaborators={collaborators}
            publicationId={id}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

export default Applications;
