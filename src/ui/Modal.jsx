"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import ButtonIcon from "./ButtonIcon";
import { createPortal } from "react-dom";
import useOutsideClick from "@/hooks/useOutsideClick";

function Modal({ title, description = "", open, onClose, children }) {
  const ref = useOutsideClick(onClose);

  return (
    open &&
    createPortal(
      <div className="fixed left-0 top-0 z-50 h-screen w-full bg-secondary-800 bg-opacity-30 backdrop-blur">
        <div
          ref={ref}
          className="fixed left-1/2 top-1/2 max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out md:max-w-lg"
        >
          {/* Modal Header */}
          <div className="mb-6 flex items-center justify-between border-b border-b-secondary-300 pb-2">
            <div>
              <h3 className="font-bold text-secondary-800 lg:text-lg">
                {title}
              </h3>
              <p className="text-sm text-secondary-500 lg:text-base">
                {description}
              </p>
            </div>

            <ButtonIcon onClick={onClose} varient="danger">
              <XMarkIcon />
            </ButtonIcon>
          </div>

          {/* Modal Content */}
          {children}
        </div>
      </div>,
      document.body,
    )
  );
}
export default Modal;
