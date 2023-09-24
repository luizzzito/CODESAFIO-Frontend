import axios from 'axios'
// Own
import { API_BASE_URL } from '../../config'

const URL = `${API_BASE_URL}/publications`

export default async function createPublication(token, body) {
  try {
    const response = await axios.post(URL, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (e) {
    console.log(e.message)
    throw new Error(e.message)
  }
}
