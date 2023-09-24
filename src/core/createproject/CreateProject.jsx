import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Typography,
  // IconButton,
  InputLabel,
  Select,
  MenuItem,
  DialogActions
} from '@mui/material'
import { Link } from 'react-router-dom'

import getAllCategories from '../../services/skill-categories/get-all-skill-categories.services'
import getAllSkills from '../../services/skills/get-all-skills.services'

import ModalPopup from '../components/ModalPopup'

const CreateProject = () => {
  const [category, setCategory] = useState('')
  const [skill, setSkill] = useState('')

  const [categoryData, setCategoryData] = useState()
  const [skillData, setSkillData] = useState()

  const fetchAppInfo = async () => {
    try {
      const categories = await getAllCategories()
      setCategoryData(categories)
      const skills = await getAllSkills()
      setSkillData(skills)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAppInfo()
  }, [])

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const handleSkillChange = (event) => {
    setSkill(event.target.value)
  }

  const handleSubmit = () => {
    console.log('hola')
  }

  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)',
        width: '100vw',
        height: '100vh',
        pt: 7
      }}
    >
      <Card
        position='static'
        sx={{ bgcolor: 'white', width: '80%', mx: 'auto' }}
      >
        <CardContent>
          <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 1 }}>
            Crea tu Proyecto
          </Typography>
          <TextField
            label='Nombre del Proyecto'
            variant='outlined'
            sx={{ width: '100%', mx: 'auto', my: 2 }}
          />
          <TextField
            label='Descripción del Proyecto'
            variant='outlined'
            fullWidth
            rows={4}
            multiline
          />
          <InputLabel id='demo-simple-select-label'>
            Dificultad del Proyecto
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Dificultad del proyecto'
            onChange={handleCategoryChange}
          >
            <MenuItem value={10}>Fácil</MenuItem>
            <MenuItem value={20}>Intermedia</MenuItem>
            <MenuItem value={30}>Difícil</MenuItem>
          </Select>
          <Typography>Agrega un nuevo puesto al proyecto</Typography>
          <CardActions>
            <ModalPopup modalFunction={handleSubmit}>
              <DialogActions sx={{ flexDirection: 'column', gap: 2 }}>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Dificultad del proyecto'
                  onChange={handleCategoryChange}
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

                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Dificultad del proyecto'
                  onChange={handleSkillChange}
                >
                  {skillData
                    ?.filter((skill) => skill.skillCategoryId === category)
                    .map((skill) => (
                      <MenuItem key={skill.skillId} value={skill.skillId}>
                        {skill.name}
                      </MenuItem>
                    ))}
                </Select>
                <TextField label='Competencia' select fullWidth>
                  <MenuItem>Hola</MenuItem>
                </TextField>
                <TextField label='Nivel' size='small' select fullWidth>
                  <MenuItem>Alto xd </MenuItem>
                </TextField>
              </DialogActions>
            </ModalPopup>
          </CardActions>
          <CardActions sx={{ justifyContent: 'flex-end', gap: 1 }}>
            <Link to='/createdproject'>
              <Button variant='outlined'>CANCELAR</Button>
            </Link>
            <Button variant='contained' sx={{ color: 'white' }}>
              CREAR
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  )
}

export default CreateProject
