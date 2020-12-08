const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CURRENT_USER':
      return action.current_site_user
    
    default:
      return state
  }
}