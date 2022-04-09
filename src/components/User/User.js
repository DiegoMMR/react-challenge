import React from "react";
import EditUser from "../UserForm/EditUser";

import "../../styles/User.scss";
import "../../styles/components.scss";

const User = (props) => {
  const { id, name, email, phone, country, removeUser, updateUser } = props;

  const handleRemove = () => {
    removeUser(id);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{country}</td>
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
