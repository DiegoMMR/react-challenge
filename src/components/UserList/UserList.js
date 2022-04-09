import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import User from "../User/User";
import CreateUser from "../UserForm/CreateUser";

import "../../styles/UserList.scss";

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <Fragment>
      <CreateUser />

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
              <th>Actions</th>
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
              />
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default UserList;
