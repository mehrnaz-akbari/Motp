import { FC } from "react";
import { ToastContainer } from "react-toastify";
// Styles
import "react-toastify/dist/ReactToastify.css";


const ToastProvider: FC = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      pauseOnFocusLoss
      pauseOnHover
      closeOnClick
      rtl
    />
  );
};

export default ToastProvider;
