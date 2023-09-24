import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CachedIcon from "@mui/icons-material/Cached";
import { Box } from "@mui/material";
import { shadows } from '@mui/system';


const RefreshButton = () => {
  const refresh = () => window.location.reload(true);

  return (
    <Button onClick={refresh}>
      <Box sx={{
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#42A4D2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 1
      }}>
      <IconButton>
        <CachedIcon sx={{color: 'white'}}/>
      </IconButton>
      </Box>
    </Button>
  );
};

export default RefreshButton
