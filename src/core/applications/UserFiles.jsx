import { Box, Typography } from "@mui/material";
import React from "react";
import UserCard from "./Usercard";

function UserFiles() {
  const ApplyUsers = [
    { id: 1, title: "@aaaa"},
    { id: 2, title: "@bbb" },
    { id: 3, title: "@cccc"},
  ];
  return (
    <Box sx={{mt: 1}}>
      {ApplyUsers.map((users) => {
        return (
          <UserCard
            key={users.id}
            title={users.title}
          />
        );
      })}
    </Box>
  );
}

export default UserFiles;
