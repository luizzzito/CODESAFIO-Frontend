import axios from 'axios'
// Own
import { API_BASE_URL } from '../../config'

const URL = `${API_BASE_URL}/skills/all`

export default async function getAllSkills(token) {
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}
