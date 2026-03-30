"use client";

import { useState } from "react";
import { TeachersItemProps } from "../TeacherItem";
import css from "./TeacherDescr.module.css";

const TeacherDescr = ({ teach }: TeachersItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
      {!isOpen && (
        <div className={css.readMoreContainer}>
          <button className={css.readMore} onClick={() => setIsOpen(true)}>
            Read more
          </button>
        </div>
      )}
    </div>
  );
};

export default TeacherDescr;
