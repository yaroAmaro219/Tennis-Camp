const axios = require('axios')

const baseUrl = process.env.NODE_ENV ===
  'production' ? 'https://tennis-camp.herokuapp.com/' :
  'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

// ============ POST ============

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