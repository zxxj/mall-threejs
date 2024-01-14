import { http } from './index'

http.interceptors.response.use((res) => res.data)
