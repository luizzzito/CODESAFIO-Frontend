import axios from 'axios'
import { API_BASE_URL } from '../../config'

const BASE_URL = `${API_BASE_URL}/auth`

export const login = async (userData) => {
  const { data } = await axios.post(`${BASE_URL}/login`, userData)
  console.log(data)
  return data
}

export const register = async (userData) => {
  const { data } = await axios.post(`${BASE_URL}/register`, userData)
  console.log(data)
  return data
}
