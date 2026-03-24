import { BounceLoader } from "react-spinners";
import css from "./loading.module.css";

const Loading = () => {
  return (
    <div className={css.loadingContainer}>
      <BounceLoader loading={true} color="var(--accent-color)" />
    </div>
  );
};

export default Loading;
