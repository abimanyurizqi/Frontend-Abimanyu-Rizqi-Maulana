import { combineReducers } from "redux";
import { gotContact, foundContact, savedContact, deletedContact } from './contact';
export default combineReducers({
    gotContact,
    foundContact,
    savedContact, deletedContact
});