import axios from "axios";
// Own
import { API_BASE_URL } from "../../config";

const URL = `${API_BASE_URL}/skill-categories`;

export default async function getAllCategories(token) {
  try {
    const response = await axios.get(URL + "/all/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response
  } catch (e) {
    console.log(e.message);
    throw new Error(error.message);
  }
}