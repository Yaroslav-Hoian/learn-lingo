import { logoutUser } from "@/lib/api/authService";
import css from "./LogOut.module.css";
import toast from "react-hot-toast";

interface LogOutProps {
  onClose: () => void;
}

const LogOut = ({ onClose }: LogOutProps) => {
  const handleLogout = () => {
    logoutUser();
    onClose();
    toast.success("You have been logged out successfully.");
  };
  return (
    <div className={css.container}>
      <p className={css.message}>Are you sure you want to log out?</p>
      <div className={css.buttonsBox}>
        <button
          className={`${css.button} ${css.logOutBtn}`}
          onClick={handleLogout}
        >
          Yes, log out
        </button>
        <button className={`${css.button} ${css.cancelBtn}`} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogOut;
