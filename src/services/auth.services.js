import axios from "axios";

const BASE_URL = "https://codesafio-backend.onrender.com/";

export const login = async (userData) => {
  const { data } = await axios.post(BASE_URL + "auth/login", userData);
  console.log(data);
  return data;
};

export const register = async (userData) => {
  const { data } = await axios.post(BASE_URL + "auth/register", userData);
  console.log(data);
  return data;
};
