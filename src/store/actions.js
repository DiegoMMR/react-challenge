export const add_user = (newUser) => {
  return {
    type: "user/add",
    payload: {
      newUser,
    },
  };
};

export const remove_user = (id) => {
  return {
    type: "user/remove",
    payload: {
      id,
    },
  };
};

export const update_user = (user) => {
  return {
    type: "user/update",
    payload: {
      user,
    },
  };
};
