import React from "react";
import ReactDom from "react-dom";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";
const Modal = (props) => {
  const { toggle } = props;
  return ReactDom.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src={close} alt="close"></img>
          </button>
        </div>
        <img src={rules} alt="rules"></img>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
