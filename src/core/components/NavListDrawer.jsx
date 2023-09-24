import {
  List,
  ListItem,
  Box,
  ListItemIcon,
  ListItemButton,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function NavListDrawer({ navLinks, setOpen }) {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: "white",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <nav>
        {/* Para cada item que recibe, va a crear un boton con icono */}
        {navLinks.map((item) => (
          <List key={item.title}>
            <ListItem>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.title}
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </nav>
      <Button
        onClick={() => {
          dispatch(logout());
        }}
        sx={{mb: 2}}
        color="error"
      >
        Cerrar Sesión
      </Button>
    </Box>
  );
}
