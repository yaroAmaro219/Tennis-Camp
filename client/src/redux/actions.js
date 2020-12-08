const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})

export const getProfileFetch = () => {
  return dispatch => {
      const token = localStorage.token
      if (token) {
          fetch('https://tennis-camp.herokuapp.com/profile', {
              headers: {
                  "Authorization": token
              }
          })
          .then(res => res.json())
          .then(profileData => {                
              dispatch(loginUser(profileData))
          })
      }
  }
}

export const grabSingleSession = (session_id) => dispatch => {
  fetch(`http://localhost:3000/${session_id}`)
  .then(res => res.json())
  .then(SessionJson => {
      dispatch({ type: "GET_SINGLE_PRODUCT", session: SessionJson})
  })
  // dispatch({ type: "GET_SINGLE_PRODUCT", product: singleProduct})
}


// If there is a current user and the curent order is !null fetch for the order and set state
export const fetchCart = current_user => dispatch => {   
  fetch('http://localhost:3000/sessions')
      .then(res => res.json())
      .then(sessionsJson => {
          dispatch({ type: "GET_CURRENT_SESSIONS", sessions: sessionsJson})
      })
}

export const fetchSessions = () => dispatch => {
  fetch('http://localhost:3000/sessions')
      .then(res => res.json())
      .then(sessionsJson => {
          dispatch({ type: "GET_CURRENT_SESSIONS", sessions: sessionsJson})
      })
}

// Add to cart action //
export const addToCart = data => dispatch => {
  const userId = data.user.id  
  const currentOrder = data.user.current_order
  const sessionId = data.session.id
  let quantity = data.quantity        

  if (currentOrder === null) {
      // Create new Order
      const token = localStorage.token

      let config4 = {
          method: "POST",
          headers: {
              'Content-Type':'application/json',
              "Authorization": token,
              'Accept':'application/json'
          },
          body: JSON.stringify({user_id: userId, session_id: sessionId, quantity: quantity})
      }
      
      fetch("http://localhost:3000/orders/neworder", config4)
          .then(rsp => rsp.json())
          .then(data => {
              // const order = {...data.order, order_items: data.order_items}
              // dispatch({ type: "NEW_ORDER", cart: order}) 
              dispatch({ type: "UPDATE_CURRENT_USER", current_site_user: data}) 
          }) 
  } else {
      const token = localStorage.token

          let config3 = {
              method: "POST",
              headers: {
              'Content-Type':'application/json',
              "Authorization": token,
              'Accept':'application/json'
              },
              body: JSON.stringify({order_id: currentOrder, session_id: sessionId, quantity: quantity})
          }
          
          fetch("http://localhost:3000/order_items", config3)
              .then(rsp => rsp.json())
              .then(data => {
                  // const order = {...data.order, order_items: data.order_items}
                  // dispatch({ type: "NEW_ORDER", cart: data}) 
                  dispatch({ type: "UPDATE_CURRENT_USER", current_site_user: data}) 

              }) 
      }
  }


  // Remove an Item from cart
  export const removeFromCart = data => dispatch => {
      const token = localStorage.token
      let config4 = {
          method: "DELETE",
          headers: {
              'Content-Type':'application/json',
              'Authorization': token,
              'Accept':'application/json'
          }
      }
      
      fetch(`http://localhost:3000/order_items/${data}`, config4)
      .then(rsp => rsp.json())
      .then(data => {
          dispatch({ type: "UPDATE_CURRENT_USER", current_site_user: data}) 
          // const order = {...data.order, order_items: data.order_items}
          // dispatch({ type: "NEW_ORDER", cart: data}) 
      }) 
      
  }

  export const changeUserCurrentOrderAttToNull = data => dispatch => {
    const token = localStorage.token
    let config7 = {
        method: "PATCH",
        headers: {
        'Content-Type':'application/json',
        'Authorization': token,
        'Accept':'application/json'
        },
        body: JSON.stringify()
    }
    fetch(`http://localhost:3000/users/order_complete/${data}`, config7)
        .then(rsp => rsp.json())
        .then(data => {
            dispatch({ type: "UPDATE_CURRENT_USER", current_site_user: data})
        }) 

}
  