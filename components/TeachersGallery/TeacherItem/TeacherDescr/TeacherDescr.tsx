"use client";

import { TeachersItemProps } from "../TeacherItem";
import css from "./TeacherDescr.module.css";
import TeacherMoreInfo from "../TeacherMoreInfo/TeacherMoreInfo";

interface TeacherDescrProps extends TeachersItemProps {
  setShowInfo: (value: boolean) => void;
  showInfo: boolean;
}

const TeacherDescr = ({ teach, setShowInfo, showInfo }: TeacherDescrProps) => {
  return (
    <div className={css.teacherDescr}>
      <div className={css.teacherDescrInfo}>
        <p className={css.languageList}>
          Speaks:{" "}
          <span className={css.languageSpan}>
            {teach.languages?.join(", ")}
          </span>
        </p>
        <p className={css.languageList}>
          Lesson Info:{" "}
          <span className={css.languageInfo}>{teach.lesson_info}</span>
        </p>
        <p className={css.languageList}>
          Conditions:{" "}
          <span className={css.languageInfo}>{teach.conditions}</span>
        </p>
      </div>
      {showInfo ? (
        <TeacherMoreInfo teach={teach} />
      ) : (
        <div className={css.readMoreContainer}>
          <button className={css.readMore} onClick={() => setShowInfo(true)}>
            Read more
          </button>
        </div>
      )}
    </div>
  );
};

export default TeacherDescr;
