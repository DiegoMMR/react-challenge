import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../store/store";
import "@testing-library/jest-dom/extend-expect";

import EditUser from "./EditUser";

describe("Render EditUser", () => {
  let users = [{ id: "1", name: "Juan", email: "arg@gmail.com", phone: "+543242343", country: "AR" }];

  const updateUser = (user) => {
    users = users.map((u) => (u.id === user.id ? user : u));
  };

  beforeEach(() => {
    const store = configureStore({ users });
    render(
      <Provider store={store}>
        <EditUser user={users[0]} updateUser={updateUser} />
      </Provider>
    );
  });

  it("put user name", () => {
    const input = document.getElementsByName("name")[0];

    expect(input.value).toBe("Juan");
  });

  it("put user email", () => {
    const input = document.getElementsByName("email")[0];

    expect(input.value).toBe("arg@gmail.com");
  });
});
