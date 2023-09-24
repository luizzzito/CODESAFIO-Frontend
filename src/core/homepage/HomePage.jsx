import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import ProjectsCard from "./ProjectsCard";
import RefreshButton from "../components/RefreshButton";
import InfiniteScroll from "react-infinite-scroll-component";
import getPublications from "../../services/publications/get-publications.services";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userToken } = useSelector((state) => state.auth);

  const [projects, setProjects] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [pages, setPages] = useState(0);

  const fetchNextPage = async () => {
    try {
      const publications = await getPublications(userToken, nextPage);
      setNextPage(nextPage + 1);
      setProjects(projects.concat(publications.items));
      setPages(publications.paginate);
      console.log(projects);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchProjects = async () => {
    try {
      const publications = await getPublications(userToken, nextPage);
      setNextPage(nextPage + 1);
      setProjects(publications.items);
      setPages(publications.paginate);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        minwidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
      sx={{
        width: '100%',
        height: 40,
        position: 'relative',
        bottom: 55,
        display: 'flex',
        direction: 'column',
        justifyContent: 'end'
      }}>
      <RefreshButton/>
      </Box>
      <Typography variant="h5" sx={{ color: "white", mt: -5 }}>
        Descubre nuevos proyectos {console.log(state)}
      </Typography>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <InfiniteScroll
          className="infinite-scroll"
          scrollableTarget="scrollableSection"
          hasMore={nextPage < pages.pages}
          dataLength={projects.length}
          next={fetchNextPage}
          loader={<h1>Loading...</h1>}
        >
          {projects.map((project) => {
            return (
              <Box
                key={project.publication.publicationId}
                sx={{ width: "80%" }}
              >
                <ProjectsCard project={project.publication} />
              </Box>
            );
          })}
        </InfiniteScroll>
      </Box>
    </Box>
  );
};

export default HomePage;
