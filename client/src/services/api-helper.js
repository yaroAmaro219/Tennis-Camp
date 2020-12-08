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

export const putCoach = async (id, coachData) => {
  const resp = await api.put(`/coaches/${id}`, {coach: coachData})
  return resp.data
}

export const showCoach = async (id) => {
  const resp = await api.get(`/coaches/${id}`)
  return resp.data
}

export const destroyCoach = async (id) => {
  const resp = await api.delete(`/coaches/${id}`)
  return resp.data
}

export const showChild = async (id, child_id) => {
  const resp = await api.get(`/users/${id}/children/${child_id}`)
  return resp.data
}

export const showUsers = async () => {
  const resp = await api.get(`/users`)
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

export const destroySession = async (id) => {
  const resp = await api.delete(`/sessions/${id}`)
  return resp.data
}

export const showSession = async () => {
  const resp = await api.get(`/sessions/`)
  return resp.data
}

export const getSession = async (id) => {
  const resp = await api.get(`/sessions/${id}`)
  return resp.data
}

export const postSession = async (id, sessionData) => {
  const resp = await api.post(`/locations/${id}/sessions/`, {session: sessionData})
  return resp.data
}

export const putSession = async (id, sessionData) => {
  const resp = await api.put(`/sessions/${id}`, { session: sessionData })
  return resp.data
}

export const putUser = async (id, data) => {
  const resp = await api.put(`users/${id}`, { user: data })
  return resp.data
}

//========== COACHES ===================

export const showCoaches = async () => {
  const resp = await api.get(`/coaches`)
  return resp.data
}

//========== AUTH ===================
export const newOrder = async (data) => {
  const resp = await api.post(`/orders`, { order: data })
  return resp.data
}

export const newOrderItem = async (data) => {
  const resp = await api.post(`/order_items`, { order_item: data })
  return resp.data
}

// export const addToCart = data => dispatch => {
//   const userId = data.user.id  
//   const currentOrder = data.user.current_order
//   const sessionId = data.session.id
//   let quantity = data.quantity        

//   if (currentOrder === null) {
//       const token = localStorage.token
//       let config4 = {
//           method: "POST",
//           headers: {
//               'Content-Type':'application/json',
//               "Authorization": token,
//               'Accept':'application/json'
//           },
//           body: JSON.stringify({user_id: userId, session_id: sessionId, quantity: quantity})
//       }
//       fetch("http://localhost:3000/orders/neworder", config4)
//           .then(rsp => rsp.json())
//           .then(data => {
//               dispatch({ type: "UPDATE_CURRENT_USER", current_site_user: data}) 
//           }) 
//   } else {
//       const token = localStorage.token
//           let config3 = {
//               method: "POST",
//               headers: {
//               'Content-Type':'application/json',
//               "Authorization": token,
//               'Accept':'application/json'
//               },
//               body: JSON.stringify({order_id: currentOrder, session_id: sessionId, quantity: quantity})
//           }
    
//           fetch("http://localhost:3000/order_items", config3)
//               .then(rsp => rsp.json())
//               .then(data => {
//                   dispatch({ type: "UPDATE_CURRENT_USER", current_site_user: data}) 
//               }) 
//       }
//   }