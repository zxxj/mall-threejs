import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config'

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
