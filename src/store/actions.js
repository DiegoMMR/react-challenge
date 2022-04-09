export const add_user = (newUser) => {
  return {
    type: "user/add",
    payload: {
      newUser,
    },
  };
};

export const remove_user = (index) => {
  return {
    type: "user/remove",
    payload: {
      index,
    },
  };
};
