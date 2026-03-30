import { Teacher, TeacherFilter } from "@/types/type";
import css from "./TeacherLvls.module.css";

export interface TeacherLvlsProps {
  teach: Teacher;
  filters?: TeacherFilter;
}

const TeacherLvls = ({ teach, filters }: TeacherLvlsProps) => {
  const levels = teach.levels;
  return (
    <ul className={css.teacherLvlsList}>
      {levels.map((level, index) => (
        <li
          key={index}
          className={css.teacherLvlItem}
          style={{
            backgroundColor:
              level === filters?.levels?.[0]
                ? "var(--accent-color)"
                : "transparent",
            borderColor:
              level === filters?.levels?.[0]
                ? "var(--accent-color)"
                : "rgba(18, 20, 23, 0.2)",
          }}
        >
          #{level}
        </li>
      ))}
    </ul>
  );
};

export default TeacherLvls;
