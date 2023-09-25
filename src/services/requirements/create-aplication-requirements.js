import axios from "axios";
// Own
import { API_BASE_URL } from "../../config";

const URL = `${API_BASE_URL}/applications-requirements`;

export default async function addSkillToPublication(token, body, pid) {
  try {
    const response = await axios.post(URL+`/publication/${pid}`, body, {
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
