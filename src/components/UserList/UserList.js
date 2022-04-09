import React, { Fragment } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import User from "../User/User";
import CreateUser from "../UserForm/CreateUser";
import { add_user, remove_user, update_user } from "../../store/actions";

import "../../styles/UserList.scss";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const addUser = (user) => {
    dispatch(add_user({ ...user, id: uuidv4() }));
  };

  const removeUser = (id) => {
    dispatch(remove_user(id));
  };

  const updateUser = (user) => {
    dispatch(update_user(user));
  };

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
