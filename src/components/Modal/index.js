import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalBox = ({ title, children, open, modal }) => {
  return (
    <div>
      <Modal
        isOpen={modal}
        role="dialog"
        className="exampleModal"
        tabIndex="-1"
        toggle={open}
      >
        <div>
          <ModalHeader toggle={open}>{title}</ModalHeader>
          <ModalBody>
            <div className="modal-body">{children}</div>
          </ModalBody>
        </div>
      </Modal>
    </div>
  );
};

export default ModalBox;
