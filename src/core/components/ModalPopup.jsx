import {
  Box,
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

const ModalPopup = ({ children, modalFunction }) => {
  const [open, setOpen] = useState(false);
  const openPopup = () => {
    setOpen(true);
  };
  const closePopup = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    modalFunction();
    closePopup();
  };
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <Button onClick={openPopup} variant="contained" fullWidth size="small">
        <IconButton color="blank">
          <AddIcon />
        </IconButton>
      </Button>
      <Dialog open={open}>
        <DialogTitle> Agregar competencia</DialogTitle>
        <DialogContent sx={{ width: { xs: "80vw", sm: "100%" } }}>
          {children}
        </DialogContent>
        <DialogActions sx={{ mb: 1 }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", gap: 1 }}
          >
            <Button onClick={closePopup} variant="outlined" color="primary">
              Cancelar
            </Button>
            <Button
              variant="contained"
              sx={{ color: "white" }}
              onClick={() => {
                modalFunction();
                closePopup();
              }}
            >
              Agregar
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalPopup;
