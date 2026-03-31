import { TeachersItemProps } from "../TeacherItem";
import TeacherMoreInfoReviews from "../TeacherMoreInfoRev/TeacherMoreInfoReviews";
import css from "./TeacherMoreInfo.module.css";

const TeacherMoreInfo = ({ teach }: TeachersItemProps) => {
  return (
    <div className={css.teacherMoreInfo}>
      <p className={css.experience}>{teach.experience}</p>
      <TeacherMoreInfoReviews teach={teach} />
    </div>
  );
};

export default TeacherMoreInfo;
