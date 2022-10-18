import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import users from "./users";

// 최종 결과물
const reducer = combineReducers({
  todos,
  filter,
  users,
});

export default reducer;
