const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CURRENT_SESSIONS':
      return action.sessions
    
    default:
      return state
  }
}