import axios from "axios";
// Own
import { API_BASE_URL } from "../../config";

const URL = `${API_BASE_URL}/publications`;

export default async function getPublicationByLeader(token, leaderId) {
  try {
    const response = await axios.get(URL + "/userPublication/" + leaderId, {
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
