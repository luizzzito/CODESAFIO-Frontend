import axios from "axios";
// Own
import { API_BASE_URL } from "../../config";

const URL = `${API_BASE_URL}/publications`;

export default async function getPublications(token, page = 1, size = 10) {
  try {
    const response = await axios.get(URL + `?page=${page}&size=${size}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
