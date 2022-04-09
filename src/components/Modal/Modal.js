import React from "react";

import "./Modal.scss";

const Modal = ({ children, customClass, show, closeCallback }) => (
  <div className={`modal ${customClass}`} style={{ display: show ? "block" : "none" }}>
    <div className="overlay" onClick={closeCallback}></div>
    <div className="modal_content">
      {children}
      <button title="Close" className="close_modal" onClick={closeCallback}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
);

export default Modal;
