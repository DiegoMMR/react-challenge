import React, { Fragment, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import User from "../User/User";
import CreateUser from "../UserForm/CreateUser";

import "./_user-list.scss";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, { ...user, id: uuidv4() }]);
  };

  const removeUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const updateUser = (user) => {
    setUsers((prevUsers) => prevUsers.map((prevUser) => (prevUser.id === user.id ? user : prevUser)));
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      setUsers(users);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <Fragment>
      <CreateUser addUser={addUser} />

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                country={user.country}
                removeUser={removeUser}
                updateUser={updateUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default UserList;
