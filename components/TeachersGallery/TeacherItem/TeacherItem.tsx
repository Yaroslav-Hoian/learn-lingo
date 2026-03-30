import { Teacher, TeacherFilter } from "@/types/type";
import css from "./TeacherItem.module.css";
import TeacherAvatar from "./TeacherAvatar/TeacherAvatar";
import TeacherHeader from "./TeacherHeader/TeacherHeader";
import TeacherDescr from "./TeacherDescr/TeacherDescr";
import TeacherLvls from "./TeacherLvls/TeacherLvls";

export interface TeachersItemProps {
  teach: Teacher;
  filters?: TeacherFilter;
}

const TeacherItem = ({ teach, filters }: TeachersItemProps) => {
  return (
    <li className={css.teacherItem}>
      <TeacherAvatar teach={teach} />
      <div className={css.teacherInfo}>
        <TeacherHeader teach={teach} />
        <TeacherDescr teach={teach} />
        <TeacherLvls teach={teach} filters={filters} />
      </div>
    </li>
  );
};

export default TeacherItem;
