import IconJust from "@/components/Icons/Icons";
// import { TeachersItemProps } from "../TeacherItem";
import css from "./TeacherHeader.module.css";

interface TeacherHeaderFavoriteProps {
  onClick: () => void;
}

const TeacherHeaderFavorite = ({ onClick }: TeacherHeaderFavoriteProps) => {
  return (
    <button className={css.teacherFavoriteBtn} type="button" onClick={onClick}>
      <IconJust
        width={26}
        height={26}
        icon="heart"
        className={`${css.iconFavorite}`}
      />
    </button>
  );
};

export default TeacherHeaderFavorite;
