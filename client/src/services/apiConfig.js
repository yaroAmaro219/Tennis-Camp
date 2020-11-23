import Axios from 'axios'

const JwtToken = localStorage.getItem('token') || null

let apiUrl

const apiUrls = {
  production: 'https://tennis-camp.herokuapp.com/',
  development: 'http://localhost:3000/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = Axios.create({
  baseURL: apiUrl,
  common: {
    headers: {
      Authorization: `Bearer ${JwtToken}`,
      'Access-Control-Allow-Origin': '*'
    }
  }
})

export default api