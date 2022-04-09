import React, { Fragment, useState } from "react";
import Modal from "../Modal/Modal";
import UserForm from "./UserForm";

import "../components.scss";
import "./UserForm.scss";

const CreateUser = ({ addUser }) => {
  const [user, setUser] = useState({ name: "", email: "", phone: "", country: "" });
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = () => {
    addUser(user);
    toggleModal();
    setUser({ name: "", email: "", phone: "", country: "" });
  };

  return (
    <Fragment>
      <div className="create-btn-container">
        <button className="button btn-success" onClick={toggleModal}>
          Add User
        </button>
      </div>

      <Modal show={showModal} closeCallback={toggleModal} customClass="custom_modal_class">
        <UserForm title="Add new user" user={user} setUser={setUser} submitForm={handleSubmit} />
      </Modal>
    </Fragment>
  );
};

export default CreateUser;
