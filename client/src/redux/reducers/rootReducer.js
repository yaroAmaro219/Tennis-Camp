import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import sessionsReducer from "./sessionsReducer";
import singleSessionReducer from "./singleSessionReducer"

export default combineReducers({
    cart: cartReducer,
    current_site_user: userReducer,
    sessions: sessionsReducer,
    session: singleSessionReducer,
});