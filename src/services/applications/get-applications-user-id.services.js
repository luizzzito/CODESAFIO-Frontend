import axios from 'axios'
// Own
import { API_BASE_URL } from '../../config'

const URL = `${API_BASE_URL}/applications`

export default async function getApplicationsByUserId(token, userId) {
  try {
    const response = await axios.get(`${URL}/user/${userId}`, {
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