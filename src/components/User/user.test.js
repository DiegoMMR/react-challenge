import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../store/store";
import "@testing-library/jest-dom/extend-expect";

import User from "./User";

const user = { name: "Juan", email: "arg@gmail.com", phone: "+543242343", country: "AR" };

describe("Render User", () => {
  beforeEach(() => {
    const store = configureStore();
    render(
      <Provider store={store}>
        <table className="table">
          <tbody>
            <User id={user.id} name={user.name} email={user.email} phone={user.phone} country={user.country} />
          </tbody>
        </table>
      </Provider>
    );
  });

  it("Render Name", () => {
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
  it("Render Email", () => {
    expect(screen.getByText(user.email)).toBeInTheDocument();
  });
  it("Render Phone", () => {
    expect(screen.getByText(user.phone)).toBeInTheDocument();
  });
  it("Render Country", () => {
    expect(screen.getByText(user.country)).toBeInTheDocument();
  });
});
