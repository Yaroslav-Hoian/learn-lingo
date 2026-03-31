import IconJust from "@/components/Icons/Icons";
// import { TeachersItemProps } from "../TeacherItem";
import css from "./TeacherHeader.module.css";

const TeacherHeaderFavorite = () => {
  return (
    <button className={css.teacherFavoriteBtn} type="button">
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
