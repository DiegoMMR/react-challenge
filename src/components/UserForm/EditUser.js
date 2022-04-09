import React, { Fragment, useState } from "react";
import Modal from "../Modal/Modal";
import UserForm from "./UserForm";

import "../components.scss";
import "./UserForm.scss";

const CreateUser = ({ user, updateUser }) => {
  const [tempUser, setUser] = useState(user);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = () => {
    updateUser(tempUser);
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
