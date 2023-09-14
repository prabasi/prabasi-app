import React from "react";
import useToast, { ToastModes } from "../hooks/useToast";

const Toast: React.FC<{ message: string; mode: ToastModes }> = ({
  message,
  mode,
}) => {
  return (
    <div
      className="flex items-center p-4 bg-white rounded-lg shadow-md text-black"
      role="alert"
    >
      {mode === "success" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 -0.5 25 25"
          fill="none"
        >
          <path
            d="M5.5 12.5L10.167 17L19.5 8"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {mode === "error" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 -0.5 25 25"
          fill="none"
        >
          <path
            d="M19 19L6 6M6 19L19 6L6 19Z"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span className="ml-2">{message}</span>
    </div>
  );
};

const Toasts = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed z-[1000] top-5 w-full flex flex-col items-center pointer-events-none">
      <div className="max-w-[70vw]">
        {toasts.map((toast) => (
          <div className="mb-2 flex" key={toast.id}>
            <Toast message={toast.message} mode={toast.mode} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toasts;
