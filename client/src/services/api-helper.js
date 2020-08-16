const axios = require('axios')

const baseUrl = process.env.NODE_ENV ===
  'production' ? 'https://tennis-camp.herokuapp.com/' :
  'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

export const showUser = async () => {
  const resp = await api.get(`/home`)
  return resp.data
}

// ============ ENROLL ============

export const postEnroll = async (postData) => {
  const resp = await api.post(`/enrolls`, {enroll: postData })
  return resp.data
}

export const showEnroll = async () => {
  const resp = await api.get(`/enrolls`)
  return resp.data
}

export const destroyEnroll = async (id) => {
  const resp = await api.delete(`/enrolls/${id}`)
  return resp.data
}

//========== AUTH ===================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post(`/users/`, { user: registerData })
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify')
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}