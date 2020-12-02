import { combineReducers } from "redux";

import contactReducer from './contactReducer';

// combinador de reducer
export default combineReducers({
    contacts: contactReducer
})