export default (state = { users: [] }, action) => {
  switch (action.type) {
    case "user/add":
      return addUser(state, action.payload.newUser);
    default:
      return state;
  }
};

const addUser = (state, newUser) => {
  return {
    ...state,
    users: [...state.users, newUser],
  };
};
