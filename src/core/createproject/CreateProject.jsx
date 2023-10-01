import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";

import getAllCategories from "../../services/skill-categories/get-all-skill-categories.services";
import getAllSkills from "../../services/skills/get-all-skills.services";

import ModalPopup from "../components/ModalPopup";
import createPublication from "../../services/publications/create-publication";
import { useSelector } from "react-redux";
import addSkillToPublication from "../../services/requirements/create-aplication-requirements";

const CreateProject = () => {
  const [category, setCategory] = useState("");
  const [project, setProject] = useState({
    name: "",
    description: "",
    difficulty: "",
    status: "not-started",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
    setCategory(e.target.value);
  };

  const { userToken } = useSelector((state) => state.auth);
  const [categoryData, setCategoryData] = useState();
  const [skillData, setSkillData] = useState();
  const [skill, setSkill] = useState();
  const [skillArray, setSkillArray] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [savePid, setSavePid] = useState(0);

  const fetchAppInfo = async () => {
    try {
      const categories = await getAllCategories();
      setCategoryData(categories);
      const skills = await getAllSkills();
      setSkillData(skills);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAppInfo();
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmitModal = () => {
    if (category && skill) {
      const newSkill = {
        skillId: skill,
        skillCategoryId: category,
        quantity: +quantity,
        publicationId: savePid,
      };
      setSkillArray([...skillArray, newSkill]);
      setCategory("");
      setSkill("");
    }
    console.log(skillArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(project)
      const { data } = await createPublication(userToken, project);
      console.log(data.publicationId);
      setSavePid(data.publicationId)
      console.log(savePid)
      skillArray.map(async (item) => {
        console.log(savePid)
        return await addSkillToPublication(userToken, item, savePid);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        width: "100vw",
        height: "100vh",
        pt: 7,
      }}
    >
      <Card
        position="static"
        sx={{ bgcolor: "white", width: "80%", mx: "auto" }}
      >
        <CardContent component="form" onSubmit={handleSubmit}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Crea tu Proyecto
          </Typography>
          <TextField
            label="Nombre del Proyecto"
            name="name"
            variant="outlined"
            sx={{ width: "100%", mx: "auto", my: 2 }}
            onChange={handleChange}
          />
          <TextField
            label="Descripción del Proyecto"
            variant="outlined"
            name="description"
            fullWidth
            rows={4}
            multiline
            onChange={handleChange}
          />
          <InputLabel id="demo-simple-select-label">
            Dificultad del Proyecto
          </InputLabel>
          <Select
            name="difficulty"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Dificultad del proyecto"
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={1}>Fácil</MenuItem>
            <MenuItem value={2}>Intermedia</MenuItem>
            <MenuItem value={3}>Difícil</MenuItem>
          </Select>
          <Typography>Agrega un nuevo puesto al proyecto</Typography>
          <CardActions>
            <ModalPopup
              modalFunction={handleSubmitModal}
              children={
                <DialogActions sx={{ flexDirection: "column", gap: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Categoría
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Categoria"
                    onChange={handleCategoryChange}
                    name="skillCategoryId"
                    fullWidth
                  >
                    {categoryData?.map((category) => (
                      <MenuItem
                        key={category.skillCategoryId}
                        value={category.skillCategoryId}
                      >
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>

                  <InputLabel id="demo-simple-select-label">
                    Habilidad
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Dificultad del proyecto"
                    onChange={handleSkillChange}
                    name="skillId"
                    fullWidth
                  >
                    {skillData
                      ?.filter((skill) => skill.skillCategoryId === category)
                      .map((skill) => (
                        <MenuItem key={skill.skillId} value={skill.skillId}>
                          {skill.name}
                        </MenuItem>
                      ))}
                  </Select>
                  <TextField
                    label="Cantidad"
                    variant="outlined"
                    name="quantity"
                    fullWidth
                    onChange={handleQuantityChange}
                  />
                </DialogActions>
              }
            ></ModalPopup>
          </CardActions>
          <CardActions sx={{ justifyContent: "flex-end", gap: 1 }}>
            <Link to="/createdproject">
              <Button variant="outlined">CANCELAR</Button>
            </Link>
            <Button type="submit" variant="contained" sx={{ color: "white" }}>
              CREAR
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateProject;
