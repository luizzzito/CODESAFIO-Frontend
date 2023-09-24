import axios from 'axios'
// Own
import { API_BASE_URL } from '../../config'

const URL = `${API_BASE_URL}/applications`

export default async function createApplication(token, body) {
  try {
    const response = await axios.post(`${URL}`, body, {
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
