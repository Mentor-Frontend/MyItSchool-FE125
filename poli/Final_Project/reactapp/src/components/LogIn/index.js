import React from "react";
import Modal from "../../styledComponents/Header/LogIn/modal";
import ModalContent from "../../styledComponents/Header/LogIn/modalContent";
import CloseIcon from "../../styledComponents/Header/LogIn/closeIcon";

const ModalWindow = ({ active, setActive, children }) => {
  return (
    <Modal
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        className={active ? "modalContent active" : "modalContent"}
      >
        <CloseIcon
          className={active ? "modal active" : "modal"}
          onClick={() => setActive(false)}
        >
          <ion-icon name="close"></ion-icon>
        </CloseIcon>
        {children}
      </ModalContent>
    </Modal>
  );
};

export default ModalWindow;
