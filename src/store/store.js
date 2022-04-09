import { createStore } from "redux";
import { UserReducer } from "./reducer";

const users = localStorage.getItem("users");
let initialState = { users: [] };

if (users) {
  initialState.users = JSON.parse(users);
}

function configureStore(state = initialState) {
  return createStore(UserReducer, state);
}

export default configureStore;
