import { Typography, Grid, Container, Divider, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Link, useNavigate } from "react-router-dom";
import rejectCollaborator from "../../services/collaborators/reject-collaborator.services";
import { useSelector } from "react-redux";
import acceptCollaborator from "../../services/collaborators/accept-collaborator.services";

function UserCard({ title, description, userId, publicationId }) {
  const { userToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const rejectBody = { userId: userId, publicationId: +publicationId };
  const acceptBody = {
    userId: userId,
    publicationId: +publicationId,
    rating: 5,
  };

  return (
    <Container>
      <Typography sx={{ color: "#7042D2", marginTop: 1 }}>{title}</Typography>
      <Typography sx={{ marginTop: 1 }}>{description}</Typography>
      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={7} justifySelf="flex-end">
          <Button
            variant="outlined"
            onClick={async () => {
              try {
                console.log(rejectBody)
                const response = await rejectCollaborator(
                  userToken,
                  rejectBody
                );
                console.log(response);
                navigate("/createdproject");
              } catch (e) {
                console.log(e);
              }
            }}
          >
            X
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white", marginLeft: 2 }}
            onClick={async () => {
              try {
                const response = await acceptCollaborator(
                  userToken,
                  acceptBody
                );
                console.log(response);
                navigate("/createdproject");
              } catch (e) {
                console.log(e);
              }
            }}
          >
            <CheckIcon />
          </Button>
        </Grid>
      </Grid>

      <Divider sx={{ py: 1 }} />
    </Container>
  );
}

export default UserCard;
