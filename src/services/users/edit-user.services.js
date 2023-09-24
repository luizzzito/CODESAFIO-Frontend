import axios from 'axios';
// Own
import { API_BASE_URL } from '../../config';

const URL = `${API_BASE_URL}/users`;

export default async function editUser(token, userId, body) {
  try {
    const response = await axios.put(
        `${URL}/${userId}`, body, {
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
