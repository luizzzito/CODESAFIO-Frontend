import {
  List,
  ListItem,
  Box,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavListDrawer({ navLinks, setOpen }) {
  return (
    <Box sx={{ width: 250, bgcolor: "white", height: "100%" }}>
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
    </Box>
  );
}
