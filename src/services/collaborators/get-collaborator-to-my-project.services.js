import axios from 'axios'
// Own
import { API_BASE_URL } from '../../config'

const URL = `${API_BASE_URL}/collaborators/project`

export default async function getCollaboratorsByProject(token, id) {
  try {
    const response = await axios.get(`${URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}
