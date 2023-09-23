import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    {
      title: "Home",
      path: "a",
      icon: <DeleteIcon />,
    },
    {
      title: "Perfil",
      path: "a",
      icon: <DeleteIcon />,
    },
    {
      title: "Postulaciones",
      path: "a",
      icon: <DeleteIcon />,
    },
    {
      title: "Publicaciones",
      path: "a",
      icon: <DeleteIcon />,
    },
  ];
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Codesafio
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {navLinks.map((item) => (
            <Button
              color="inherit"
              key={item.title}
              component="a"
              href={item.path}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
