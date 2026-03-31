"use client";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { ReactNode, useEffect } from "react";
import IconJust from "../Icons/Icons";

export interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  const handleBackdropClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (ev.target === ev.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <button
          type="button"
          className={css.close}
          onClick={onClose}
          aria-label="Закрити модальне вікно"
        >
          <IconJust
            icon="x"
            width={32}
                      height={32}
                      stroke="var(--dark-color)"
          />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
