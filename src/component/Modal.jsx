import { createPortal } from "react-dom";
import { useImperativeHandle, useRef, forwardRef } from "react";
const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={dialog}
    >
      {children}
      <form method="dialog">
        <button className="text-stone-800 hover:text-stone-950">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
