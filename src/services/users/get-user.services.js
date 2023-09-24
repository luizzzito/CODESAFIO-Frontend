import axios from 'axios';
// Own
import { API_BASE_URL } from '../../config';

const URL = `${API_BASE_URL}/users`;

export default async function getUser(token, userId) {
  try {
    const response = await axios.get(
        `${URL}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error(error.message);
  }
}
