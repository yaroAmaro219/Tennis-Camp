import api from './apiConfig.js'

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

//========== LOCATIONS ===================

export const showLocations = async () => {
  const resp = await api.get(`/locations`)
  return resp.data
}

export const showLocation = async (id) => {
  const resp = await api.get(`/locations/${id}`)
  return resp.data
}

export const showCoach = async (id) => {
  const resp = await api.get(`/coaches/${id}`)
  return resp.data
}

export const showChild = async (id, child_id) => {
  const resp = await api.get(`/users/${id}/children/${child_id}`)
  return resp.data
}

export const postChild = async (data) => {
  const resp = await api.post(`/children`, { child: data })
  return resp.data
}

export const postLocation = async (postData) => {
  const resp = await api.post(`/locations`, {location: postData })
  return resp.data
}

export const destroyLocation = async (id) => {
  const resp = await api.delete(`/locations/${id}`)
  return resp.data
}

//========== COACHES ===================

export const showCoaches = async () => {
  const resp = await api.get(`/coaches`)
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