import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";

// 최종 결과물
const reducer = combineReducers({
  todos,
  filter,
});

export default reducer;
