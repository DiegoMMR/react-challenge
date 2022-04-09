import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { add_user } from "../../store/actions";

import { v4 as uuidv4 } from "uuid";
import Modal from "../Modal/Modal";
import UserForm from "./UserForm";

import "../../styles/components.scss";
import "../../styles/UserForm.scss";

const CreateUser = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "", country: "" });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = () => {
    dispatch(add_user({ ...user, id: uuidv4() }));
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
