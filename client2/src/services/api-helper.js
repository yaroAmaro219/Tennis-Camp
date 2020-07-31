const axios = require('axios')

const baseUrl = process.env.NODE_ENV ===
  'production' ? 'https://tenniscoachesofnyc.herokuapp.com/' :
  'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

// ============ POST ============

export const postEnroll = async (postData) => {
  const resp = await api.post(`/enrolls`, {enroll: postData })
  return resp.data
}

