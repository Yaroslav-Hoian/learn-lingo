import IconJust from "@/components/Icons/Icons";
// import { TeachersItemProps } from "../TeacherItem";
import css from "./TeacherHeader.module.css";
import { TeacherHeaderProps } from "./TeacherHeader";

const TeacherHeaderFavorite = ({ onClick, isFavorite }: TeacherHeaderProps) => {
  return (
    <button className={css.teacherFavoriteBtn} type="button" onClick={onClick}>
      <IconJust
        width={26}
        height={26}
        icon="heart"
        fill={isFavorite ? "var(--accent-color)" : "transparent"}
        stroke={isFavorite ? "var(--accent-color)" : "#121417"}
        className={`${css.iconFavorite}`}
      />
    </button>
  );
};

export default TeacherHeaderFavorite;
