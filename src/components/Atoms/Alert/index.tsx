import { useEffect, useState } from "react";
import { Button } from "../Button";
import styles from "../modal/modal.module.css";
import { StatusIcon } from "../StatusIcon";
export type AlertProps = {
  isActive: boolean;
  onAccept?: any;
  onCancel?: any;
  title: string;
  description: string;
  type?: "success" | "error" | "warning";
};

export const Alert = ({
  isActive,
  onAccept,
  onCancel,
  title,
  description,
  type,
}: AlertProps) => {
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
    onCancel();
  };
  const acceptComponent = () => {
    setShowContent(false);
    setShowModal(false);
    onAccept();
  };
  return (
    <div className={`${isActive ? styles.fadeIn : styles.fadeOut} `}>
      <div className={`${showModal ? styles.showModal : styles.hideModal}`} />
      <div
        className={`${styles.modalContent} ${
          showContent ? styles.showContent : styles.hideContent
        } `}
      >
        <div className="max-w-[350px] w-full min-h-[250px] rounded-lg flex flex-col items-center py-4">
          <StatusIcon type={type} />
          <p className="px-4 my-2 font-bold text-[18px]">{title}</p>
          <p className="px-4 font-light text-[14px] text-center">
            {description}
          </p>
          <div className="flex flex-row items-center justify-between px-4 mt-[40px]">
            <Button
              variant="outline"
              text="Cancelar"
              onClick={closeComponent}
            />
            <Button
              text="Aceptar"
              onClick={acceptComponent}
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
