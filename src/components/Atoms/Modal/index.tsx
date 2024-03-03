import { useEffect, useRef, useState } from "react";
import styles from "./modal.module.css";
export type ModalProps = {
  isActive: boolean;
  onAccept?: any;
  onClose?: any;
  closeButton?: boolean;
  closeWhenTouchOut?: boolean;
  children?: JSX.Element | JSX.Element[];
};

export const Modal = ({
  isActive,
  onAccept,
  onClose,
  closeButton = false,
  closeWhenTouchOut = false,
  children,
}: ModalProps) => {
  const [showContent, setShowContent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timeOut = setTimeout(() => {
        setShowModal(true);
      }, 50);
      return () => clearTimeout(timeOut);
    }
  }, [isActive]);
  useEffect(() => {
    if (isActive) {
      const timeOut = setTimeout(() => {
        setShowContent(true);
      }, 300);
      return () => clearTimeout(timeOut);
    }
  }, [isActive]);

  const closeComponent = () => {
    setShowContent(false);
    setShowModal(false);
    onClose();
  };
  return (
    <div className={`${isActive ? styles.fadeIn : styles.fadeOut} `}>
      <div
        className={`${showModal ? styles.showModal : styles.hideModal}`}
        onClick={() => {
          if (closeWhenTouchOut && onClose) {
            return closeComponent();
          }
        }}
      />
      <div
        className={`${styles.modalContent} ${
          showContent ? styles.showContent : styles.hideContent
        } `}
      >
        {closeButton && (
          <button onClick={closeComponent} className={styles.closeButton}>
            &times;
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
