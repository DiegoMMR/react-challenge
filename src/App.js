import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";

import UserList from "./components/UserList/UserList";

import "./styles.scss";

function App() {
  return (
    <div className="app layout">
      <aside>
        <header>
          <div className="logo" />
        </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <header className="page-title">
          <h1>Users</h1>
        </header>
        <Switch>
          <Route exact path="/" component={UserList} />
        </Switch>
      </main>
    </div>
  );
}

export default React.memo(App);
