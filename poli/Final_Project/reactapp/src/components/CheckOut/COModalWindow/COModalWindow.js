import React from "react";
import COModal from "../../../styledComponents/CheckOut/COModal";
import COModalContent from "../../../styledComponents/CheckOut/COModalContent";
import COCloseIcon from "../../../styledComponents/CheckOut/COCloseicon";

const COModalWindow = ({ active, setActive, children }) => {
  return (
    <COModal
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <COModalContent
        onClick={(e) => e.stopPropagation()}
        className={active ? "modalContent active" : "modalContent"}
      >
        <COCloseIcon
          className={active ? "modal active" : "modal"}
          onClick={() => setActive(false)}
        >
          <ion-icon name="close"></ion-icon>
        </COCloseIcon>
        {children}
      </COModalContent>
    </COModal>
  );
};

export default COModalWindow;