import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import UserList from "./UserList";

var localStorageMock = (function () {
  var store = {};
  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("Render UserList", () => {
  const initalData = [
    { id: "1", name: "Juan", email: "arg@gmail.com", phone: "+543242343", country: "AR" },
    { id: "2", name: "Leao", email: "salsa@gmail.com", phone: "+336724215", country: "BR" },
  ];

  localStorageMock.setItem("users", JSON.stringify(initalData));

  beforeEach(() => render(<UserList />));

  it("Render table rows", () => {
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(3);
  });

  it("Render table headers", () => {
    const headers = screen.getAllByRole("columnheader");
    expect(headers.length).toBe(5);
  });

  it("Render User name on Table", () => {
    expect(screen.getByText(initalData[0].name)).toBeInTheDocument();
  });

  it("Render User email on Table", () => {
    expect(screen.getByText(initalData[0].email)).toBeInTheDocument();
  });

  it("Render User phone on Table", () => {
    expect(screen.getByText(initalData[0].phone)).toBeInTheDocument();
  });
});
