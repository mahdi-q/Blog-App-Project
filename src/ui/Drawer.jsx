import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Drawer({ open, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    //  Now we are sure that the component is mounted
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-50 h-screen w-full bg-secondary-800 bg-opacity-30 backdrop-blur-sm ${open ? "block" : "pointer-events-none hidden"}`}
        onClick={onClose}
      ></div>

      {/* Drawer Content */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[250px] transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="max-h-full overflow-y-auto bg-secondary-0 px-4">
          {children}
        </div>
      </div>
    </>,
    document.body,
  );
}
export default Drawer;
