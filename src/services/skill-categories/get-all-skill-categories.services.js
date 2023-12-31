import axios from 'axios';
// Own
import { API_BASE_URL } from '../../config';

const URL = `${API_BASE_URL}/skill-categories/all`;

export default async function getAllSkillCategories(token) {
  try {
    const response = await axios.get(
        URL, {
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
