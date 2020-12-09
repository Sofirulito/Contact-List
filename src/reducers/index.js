import { combineReducers } from "redux";
import { contactList } from "../actions/contactActions";

import contactReducer from './contactReducer';

// combinador de reducer
export default combineReducers({
    contacts: contactReducer
})