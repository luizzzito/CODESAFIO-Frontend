import { useState } from "react";
import {
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
} from "@mui/material";

//Drawer del sidebar
import NavListDrawer from "./NavListDrawer";

//Iconos utilizados
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Objeto con todos las secciones del navbar/sidebar
  const navLinks = [
    {
      title: "Home",
      path: "/homepage",
      icon: <HomeIcon />,
    },
    {
      title: "Tus Proyectos",
      path: "/createdproject",
      icon: <ViewInArIcon />,
    },
    {
      title: "Tus aplicaciones",
      path: "/applyproject",
      icon: <ForwardToInboxIcon />,
    },
    {
      title: "Perfil",
      path: "/profile",
      icon: <AccountCircleIcon />,
    },
  ];
  return (
    <nav>
      <AppBar position="static" sx={{ bgcolor: "#42D0BA" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "flex", sm: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box edge="" sx={{ display: { xs: "none", sm: "flex" } }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} setOpen={setOpen} />
      </Drawer>
    </nav>
  );
}
