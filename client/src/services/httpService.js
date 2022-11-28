import axios from 'axios'
import { toast } from 'react-toastify'
import Notification from '../components/Notification'

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token')

// toast.warn('')

axios.interceptors.response.use(null, (error) => {
  if (error.response?.status >= 400 && error.response?.status < 500) {
    toast.error(error.message)
    console.log(error)
  } else console.log('Logging Error', error.message)

  // return Promise.reject(error)
})

export default axios

// {
//   get: axios.get,
//   post: axios.post,
//   put: axios.put,
//   delete: axios.delete,
//   patch: axios.patch
// }
