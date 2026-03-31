import IconJust from "@/components/Icons/Icons";
import css from "./ButtonScrollToTop.module.css";

interface ScrollToTopProps {
  isVisible: boolean;
  onClick: () => void;
}

const ScrollToTop = ({ isVisible, onClick }: ScrollToTopProps) => {
  return (
    <button
      type="button"
      className={`${css.scrollToTopBtn} ${
        isVisible ? css.scrollToTopBtnVisible : ""
      }`}
      onClick={onClick}
    >
      <IconJust width={50} height={50} icon="keyboard_arrow_up" />
    </button>
  );
};

export default ScrollToTop;
