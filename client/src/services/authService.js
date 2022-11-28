import http from './httpService'
import jwtDecode from 'jwt-decode'

async function signup(userData) {
  let response = await http.post('/auth/signup', userData)
  localStorage.setItem('token', response.headers['x-auth-token'])
  return response
}

async function login(email, password) {
  let response = await http.post('/auth/login', { email, password })
  localStorage.setItem('token', response.data)
  return response
}

function logout() {
  localStorage.removeItem('token')
  window.location.href = '/'
}

function getCurrentUser() {
  let jwt = localStorage.getItem('token')
  try {
    return jwtDecode(jwt)
  } catch (ex) {
    return null
  }
}

export default {
  signup,
  login,
  logout,
  getCurrentUser
}
