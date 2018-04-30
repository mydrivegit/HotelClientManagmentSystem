import axios from 'axios'
import router from './../router'

//  Axios Global Configration

let http = axios.create({
  baseURL: 'http://localhost:3000'
})

http.interceptors.request.use((config) => {
  config.headers['authorization'] = 'Bearer ' + localStorage.getItem('token')
  return config
}, (err) => {
  return Promise.reject(err)
})

http.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err.response.status === 401) {
      router.push({ name: 'login' })
    }
    return Promise.reject(err)
  }
)

export default http
