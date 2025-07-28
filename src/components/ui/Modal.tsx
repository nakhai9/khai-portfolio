import clsx from "clsx";
import { X } from "lucide-react";

type ModalProps = {
  title: string;
  open?: boolean;
  children?: React.ReactNode;
  classNames?: string;
  close?: () => void;
};

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  open,
  classNames,
  close,
}) => {
  return (
    <>
      {open && (
        <div
          className={clsx(
            "top-0 left-0 z-50 fixed flex justify-center items-center bg-black/40 p-2 w-full h-screen",
            classNames
          )}
        >
          <div
            className={clsx(
              "relative flex flex-col gap-3 bg-white opacity-0 shadow-md p-4 rounded-md w-full sm:w-96 overflow-hidden text-slate-700 scale-95 transition-all duration-500",
              open && "opacity-100 scale-100 delay-[2000ms]"
            )}
          >
            <div className="flex justify-between items-center modal-header">
              <h2 className="font-bold text-lg">{title}</h2>
              <button
                type="button"
                className="flex justify-between items-center hover:text-amber-500 cursor-pointer"
                onClick={() => close && close}
              >
                <X />
              </button>
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
