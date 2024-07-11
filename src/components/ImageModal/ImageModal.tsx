import Modal from "react-modal";
import { FC } from "react";

import { ImageModalProps } from "./ImageModal.types";

import css from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    overflow: "visible",
  },
};

Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Modal Image"
      closeTimeoutMS={300}
      shouldCloseOnEsc={true}
      onRequestClose={() => {
        onClose();
      }}
    >
      <img className={css.modalImage} src={imageUrl} alt="Large" />
    </Modal>
  );
};

export default ImageModal;
