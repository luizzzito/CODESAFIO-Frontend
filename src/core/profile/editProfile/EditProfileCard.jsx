import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  DialogActions,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import SkillsPaper from "./SkillsPaper";
import { Link } from "react-router-dom";
import ModalPopup from "../../components/ModalPopup";
import getUser from "../../../services/users/get-user.services";
import { useSelector } from "react-redux";
import getAllCategories from "../../../services/categories/get-all-categories";

function EditProfileCard() {
  const handleSubmit = () => {
    console.log("hola");
  };

  const [user, setUser] = useState({
    name: "",
    personalDescription: "",
    ocuppation: "",
  });

  const { userToken, userID } = useSelector((state) => state.auth);
  const [occupationValue, setOccupationValue] = useState("");
  const occupations = [

  ]
  const [categories, setCategories] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setOccupationValue(event.target.value);
  };

  const getUserInfo = async () => {
    try {
      const data = await getUser(userToken, userID);
      setUser(data);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCategories = async () => {
    try {
      const  { data } = await getAllCategories(userToken)
      setCategories(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getUserInfo();
    getCategories();
  }, []);

  return (
    <Card sx={{ width: "90%", height: "80%", my: 4 }}>
      <CardHeader title={"Perfil"} />
      <CardContent
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField
          label="Nombre Completo"
          onChange={handleChange}
          name="name"
          value={user.name}
          sx={{ width: "80%" }}
        />
        <TextField
          label="Descripción Personal"
          onChange={handleChange}
          name="personalDescription"
          value={user.personalDescription}
          multiline
          rows={4}
        />
        <TextField
          name="occupation"
          label="Ocupación"
          value={occupationValue}
          onChange={handleChange}
          select
          sx={{ width: "60%", mt: 2 }}
        >
          {occupations.map((occupation) => {
            return (
              <MenuItem key={occupation.value} value={occupation.value}>
                {occupation.name}
              </MenuItem>
            );
          })}
        </TextField>
       
        <Typography color="#7B7B7B" sx={{ fontSize: 14, fontWeight: "500" }}>
          Agrega un nuevo puesto al proyecto
        </Typography>
        <SkillsPaper skill={"hola"} level={"Avanzado"} />
        <CardActions>
          <ModalPopup modalFunction={handleSubmit}>
            <DialogActions sx={{ flexDirection: "column", gap: 2 }}>
              <TextField label="Competencia" select fullWidth>
              {categories.map((category) => {
            return (
              <MenuItem key={category.value} value={category.id}>
                {category.name}
              </MenuItem>
            );
          })}
              </TextField>
              <TextField label="Nivel" size="small" select fullWidth>
                <MenuItem>Alto xd </MenuItem>
              </TextField>
              <TextField label="Nivel" size="small" select fullWidth>
                <MenuItem>Alto xd </MenuItem>
              </TextField>
            </DialogActions>
          </ModalPopup>
        </CardActions>
        <CardActions sx={{ justifyContent: "flex-end", gap: 1 }}>
          <Link to="/profile3">
            <Button variant="outlined">Cancelar</Button>
          </Link>
          <Button variant="contained" sx={{ color: "white" }}>
            Continuar
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default EditProfileCard;
