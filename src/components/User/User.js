import React from "react";
import EditUser from "../UserForm/EditUser";
import { useDispatch } from "react-redux";
import { remove_user } from "../../store/actions";

import "../../styles/User.scss";
import "../../styles/components.scss";

const User = (props) => {
  const { id, name, email, phone, country } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(remove_user(id));
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
        <EditUser user={props} />
      </td>
    </tr>
  );
};

export default User;
