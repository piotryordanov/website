import { combineReducers } from "redux";
import { reducer as Books } from "./Books";

export default combineReducers({
  Books: Books
});
