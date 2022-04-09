import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import UserForm from "./UserForm";
import { update_user } from "../../store/actions";

import "../../styles/components.scss";
import "../../styles/UserForm.scss";

const CreateUser = ({ user }) => {
  const [tempUser, setUser] = useState(user);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = () => {
    dispatch(update_user(tempUser));
    toggleModal();
  };

  return (
    <Fragment>
      <button className="button btn-warning" onClick={toggleModal}>
        Edit
      </button>

      <Modal show={showModal} closeCallback={toggleModal} customClass="custom_modal_class">
        <UserForm title="Edit user" user={tempUser} setUser={setUser} submitForm={handleSubmit} />
      </Modal>
    </Fragment>
  );
};

export default CreateUser;
