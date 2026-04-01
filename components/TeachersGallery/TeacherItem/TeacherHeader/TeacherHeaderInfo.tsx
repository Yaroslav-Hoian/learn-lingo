import IconJust from "@/components/Icons/Icons";
import { TeachersItemProps } from "../TeacherItem";
import css from "./TeacherHeader.module.css";
import TeacherHeaderFavorite from "./TeacherHeaderFavorite";
import { TeacherHeaderProps } from "./TeacherHeader";

const TeacherHeaderInfo = ({
  teach,
  onClick,
}: TeachersItemProps & TeacherHeaderProps) => {
  return (
    <div className={css.teacherHeaderInfoBox}>
      {" "}
      <div className={css.teacherHeaderInfo}>
        <div className={css.lessonsOnlineBox}>
          <IconJust
            icon="book-open"
            width={16}
            height={16}
            stroke="var(--dark-color)"
            fill="none"
          />
          <p className={css.lessonsOnline}>Lessons online</p>
        </div>
        <div className={css.spanContainer}>
          <span className={css.span}></span>
        </div>
        <div>
          <p className={css.lessonsOnline}>
            Lessons done: {teach.lessons_done}
          </p>
        </div>
        <div className={css.spanContainer}>
          <span className={css.span}></span>
        </div>
        <div className={css.lessonsOnlineBox}>
          <IconJust icon="Star-Empty" width={16} height={16} fill="#ffc531" />
          <p className={css.lessonsOnline}>Rating: {teach.rating}</p>
        </div>
        <div className={css.spanContainer}>
          <span className={css.span}></span>
        </div>
        <div>
          <p className={css.lessonsOnline}>
            Price / 1 hour:{" "}
            <span className={css.priceValue}>{teach.price_per_hour}$</span>
          </p>
        </div>
      </div>
      <TeacherHeaderFavorite onClick={onClick} />
    </div>
  );
};

export default TeacherHeaderInfo;
