import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const ModalPopup = () => {
  const [open, setOpen] = useState(false);
  const openPopup = () => {
    setOpen(true);
  };
  const closePopup = () => {
    setOpen(false);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={openPopup} variant="contained">
        <IconButton>
          <AddIcon />
        </IconButton>
      </Button>
      <Dialog open={open}>
        <DialogTitle> Titulo </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            sequi est enim temporibus delectus quidem sapiente quas repellat
            aliquid provident recusandae similique tempore, ad perspiciatis
            nihil quae soluta? Odit, deserunt.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePopup} color="error">
            Hola
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalPopup;
