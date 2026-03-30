import { TeachersItemProps } from "../TeacherItem";
import css from "./TeacherHeader.module.css";
import TeacherHeaderInfo from "./TeacherHeaderInfo";

const TeacherHeader = ({ teach }: TeachersItemProps) => {
  return (
    <div className={css.teacherHeader}>
      <div className={css.teacherNameBox}>
        <p className={css.languages}>Languages</p>
        <h3 className={css.name}>
          {teach.name} {teach.surname}
        </h3>
      </div>
      <TeacherHeaderInfo teach={teach} />
    </div>
  );
};

export default TeacherHeader;
