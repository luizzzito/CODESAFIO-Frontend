import axios from 'axios'
// Own
import { API_BASE_URL } from '../../config'

const URL = `${API_BASE_URL}/publications`

export default async function getPublicationByID(token, publicationId) {
  try {
    const response = await axios.get(`${URL}/${publicationId}`, {
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
