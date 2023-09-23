import {
  List,
  ListItem,
  Box,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";

export default function NavListDrawer({ navLinks }) {
  return (
    <Box sx={{ width: 250, bgcolor: "white", height: "100%" }}>
      <nav>
        {/* Para cada item que recibe, va a crear un boton con icono */}
        {navLinks.map((item) => (
          <List key={item.title}>
            <ListItem>
              <ListItemButton component="a" href={item.path}>
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
