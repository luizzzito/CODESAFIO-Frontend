import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import getPublicationByLeader from "../../services/publications/get-publications-by-leader";
import { useSelector } from "react-redux";

function CreatedProjectsFiles() {
  const [projects, setProjects] = useState([]);
  const { userToken, userID } = useSelector((state) => state.auth);

  const getProjects = async () => {
    try {
      const { data } = await getPublicationByLeader(userToken, userID);
      console.log(data);
      setProjects(data.items)
      console.log(projects)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Box sx={{ mt: 1 }}>
      {projects.map((item) => {
        return (
          <ProjectsCard
            key={item.id}
            title={item.name}
            date={item.createdAt}
            status={item.status}
            description={item.description}
          />
        );
      })}
    </Box>
  );
}

export default CreatedProjectsFiles;
