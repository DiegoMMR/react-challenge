import React from "react";

import "../../styles/Modal.scss";

const Modal = ({ children, customClass, show, closeCallback }) => (
  <div className={`modal ${customClass}`} style={{ display: show ? "block" : "none" }}>
    <div className="overlay" onClick={closeCallback}></div>
    <div className="modal_content">
      {children}
      <button title="Close" className="close_modal" onClick={closeCallback}>
        X
      </button>
    </div>
  </div>
);

export default Modal;
