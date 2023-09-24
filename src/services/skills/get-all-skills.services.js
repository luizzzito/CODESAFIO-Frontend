import axios from 'axios'
// Own
import { API_BASE_URL } from '../../config'

const URL = `${API_BASE_URL}/skills/all`

export default async function getAllSkills(token, skillCategoryId) {
  try {
    const response = await axios.get(`${URL}/category/${skillCategoryId}`, {
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
