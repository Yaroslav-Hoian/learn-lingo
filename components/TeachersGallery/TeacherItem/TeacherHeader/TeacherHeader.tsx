import { TeachersItemProps } from "../TeacherItem";
import css from "./TeacherHeader.module.css";
import TeacherHeaderInfo from "./TeacherHeaderInfo";

export interface TeacherHeaderProps {
  onClick: () => void;
  isFavorite: boolean;
}

const TeacherHeader = ({
  teach,
  onClick,
  isFavorite,
}: TeachersItemProps & TeacherHeaderProps) => {
  return (
    <div className={css.teacherHeader}>
      <div className={css.teacherNameBox}>
        <p className={css.languages}>Languages</p>
        <h3 className={css.name}>
          {teach.name} {teach.surname}
        </h3>
      </div>
      <TeacherHeaderInfo
        isFavorite={isFavorite}
        onClick={onClick}
        teach={teach}
      />
    </div>
  );
};

export default TeacherHeader;
