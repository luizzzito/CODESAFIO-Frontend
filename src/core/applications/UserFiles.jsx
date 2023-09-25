import { Box, Typography } from "@mui/material";
import React from "react";
import UserCard from "./Usercard";

function UserFiles({collaborators, userId, publicationId}) {

  return (
    <Box sx={{mt: 1}}>
      {collaborators.map((collaborator) => {
        return (
          <UserCard
            key={collaborator.userId}
            description={collaborator.description}
            title={collaborator.userName}
            userId={userId}
            publicationId={publicationId}
          />
        );
      })}
    </Box>
  );
}

export default UserFiles;
