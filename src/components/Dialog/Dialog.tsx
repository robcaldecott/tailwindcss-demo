import { ComponentPropsWithoutRef, useEffect } from "react";

interface DialogProps {
  open: boolean;
  onClose?: () => void;
}

export const Dialog = ({
  open,
  children,
  onClose,
  ...other
}: DialogProps & ComponentPropsWithoutRef<"div">) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClose) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", listener);
    }

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [open, onClose]);

  return open ? (
    <div
      role="presentation"
      className="fixed left-0 right-0 top-0 bottom-0 bg-black/50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        className="bg-white dark:bg-slate-900 rounded-md m-8 max-w-screen-sm shadow-2xl"
        onClick={(event) => {
          event.stopPropagation();
        }}
        {...other}
      >
        {children}
      </div>
    </div>
  ) : null;
};

export const DialogTitle = ({
  children,
  ...other
}: ComponentPropsWithoutRef<"h2">) => (
  <h2
    className="p-4 font-sans font-medium text-xl text-slate-900 dark:text-slate-50"
    {...other}
  >
    {children}
  </h2>
);

export const DialogContent = (props: ComponentPropsWithoutRef<"div">) => (
  <div className="px-4 pb-4" {...props} />
);

export const DialogContentText = (props: ComponentPropsWithoutRef<"p">) => (
  <p
    className="font-sans text-slate-500 dark:text-slate-300 text-base font-normal"
    {...props}
  />
);

export const DialogActions = (props: ComponentPropsWithoutRef<"div">) => (
  <div className="p-2 flex justify-end items-center space-x-2" {...props} />
);
