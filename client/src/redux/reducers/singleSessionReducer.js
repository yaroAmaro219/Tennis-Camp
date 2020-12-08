const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_SINGLE_SESSION':
      return action.session
    
    default:
      return state
  }
}