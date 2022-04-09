const users = localStorage.getItem("users");
let initialState = { users: [] };

if (users) {
  initialState.users = JSON.parse(users);
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user/add":
      return addUser(state, action.payload.newUser);
    case "user/remove":
      return removeUser(state, action.payload.id);
    case "user/update":
      return updateUser(state, action.payload.user);
    default:
      return state;
  }
};

const addUser = (state, newUser) => {
  const newState = {
    ...state,
    users: [...state.users, newUser],
  };

  localStorage.setItem("users", JSON.stringify(newState.users));

  return newState;
};

const removeUser = (state, id) => {
  const newState = {
    ...state,
    users: state.users.filter((user) => user.id !== id),
  };

  localStorage.setItem("users", JSON.stringify(newState.users));

  return newState;
};

const updateUser = (state, user) => {
  const newState = {
    ...state,
    users: state.users.map((prevUser) => (prevUser.id === user.id ? user : prevUser)),
  };

  localStorage.setItem("users", JSON.stringify(newState.users));

  return newState;
};
