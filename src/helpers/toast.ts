import { toast, TypeOptions } from "react-toastify";

export const callToast = (message: string, type?: TypeOptions) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message, { closeOnClick: false });
      break;
    case "info":
      toast.info(message);
      break;
    case "warning":
      toast.warn(message);
      break;
    default:
      toast(message);
  }
};
