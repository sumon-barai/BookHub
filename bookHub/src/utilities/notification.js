import toast from "react-hot-toast";

const successNotification = (message) => {
  toast.success(message);
};
const errorNotification = (message) => {
  toast.error(message);
};

export { successNotification, errorNotification };
