import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ProjectInfo from "./ProjectInfo";
import { useSelector } from "react-redux";
import getApplicationsByUserId from "../../services/applications/get-applications-user-id.services";

function ProjectsApplication() {
  const [applyProjects, setApplyProjects] = useState([]);
  const { userToken, userID } = useSelector((state) => state.auth);

  const getApplyProjectsInfo = async () => {
    try {
      const data = await getApplicationsByUserId(userToken, userID);
      console.log(data);
      setApplyProjects(data.items);

      console.log(applyProjects);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getApplyProjectsInfo();
  }, []);

  return (
    <Box sx={{ mt: 1 }}>
      {applyProjects.map((project) => {
        return (
          <ProjectInfo
            key={project.publicationId}
            name={project.name}
            date={project.createdAt}
            status={project.status}
            description={project.description}
          />
        );
      })}
    </Box>
  );
}

export default ProjectsApplication;
