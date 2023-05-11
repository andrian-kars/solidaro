import { KeyboardEvent, MouseEvent, ReactNode, TouchEvent } from "react";
import { Portal } from "..";
import s from "./Modal.module.scss";

type ModalType = {
  onClose: (e: MouseEvent | KeyboardEvent | TouchEvent) => void;
  children: ReactNode;
};

export function Modal({ onClose, children }: ModalType) {
  const handleClose = (event: MouseEvent | KeyboardEvent | TouchEvent) => {
    onClose(event);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      handleClose(event);
    }
  };

  return (
    <Portal>
      <div role="presentation" onKeyUp={handleKeyUp} className={s.modal}>
        {children}
      </div>
    </Portal>
  );
}
