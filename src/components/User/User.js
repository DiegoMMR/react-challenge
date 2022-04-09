import React from "react";
import EditUser from "../UserForm/EditUser";

import "./User.scss";
import "../components.scss";

const User = (props) => {
  const { id, name, email, phone, removeUser, updateUser } = props;

  const handleRemove = () => {
    removeUser(id);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className="button btn-danger" onClick={handleRemove}>
          Remove
        </button>
        <EditUser user={props} updateUser={updateUser} />
      </td>
    </tr>
  );
};

export default User;
