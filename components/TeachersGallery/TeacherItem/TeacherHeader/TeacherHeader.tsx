import { TeachersItemProps } from "../TeacherItem";
import css from "./TeacherHeader.module.css";
import TeacherHeaderInfo from "./TeacherHeaderInfo";

export interface TeacherHeaderProps {
  onClick: () => void;
}

const TeacherHeader = ({
  teach,
  onClick,
}: TeachersItemProps & TeacherHeaderProps) => {
  return (
    <div className={css.teacherHeader}>
      <div className={css.teacherNameBox}>
        <p className={css.languages}>Languages</p>
        <h3 className={css.name}>
          {teach.name} {teach.surname}
        </h3>
      </div>
      <TeacherHeaderInfo onClick={onClick} teach={teach} />
    </div>
  );
};

export default TeacherHeader;
