import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CachedIcon from "@mui/icons-material/Cached";

const RefreshButton = () => {
  const refresh = () => window.location.reload(true);

  return (
    <Button onClick={refresh}>
      <IconButton>
        <CachedIcon />
      </IconButton>
    </Button>
  );
};

export default RefreshButton
