"use client";

import { Teacher, TeacherFilter } from "@/types/type";
import css from "./TeacherItem.module.css";
import TeacherAvatar from "./TeacherAvatar/TeacherAvatar";
import TeacherHeader from "./TeacherHeader/TeacherHeader";
import TeacherDescr from "./TeacherDescr/TeacherDescr";
import TeacherLvls from "./TeacherLvls/TeacherLvls";
import { useState } from "react";

export interface TeachersItemProps {
  teach: Teacher;
  filters?: TeacherFilter;
}

interface TeacherItemModalProps {
  teach: Teacher;
  filters?: TeacherFilter;
  onBook: () => void;
}

const TeacherItem = ({ teach, filters, onBook }: TeacherItemModalProps) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <li className={css.teacherItem}>
      <TeacherAvatar teach={teach} />
      <div className={css.teacherInfo}>
        <TeacherHeader teach={teach} />
        <TeacherDescr
          teach={teach}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
        />
        <TeacherLvls teach={teach} filters={filters} />
        {showInfo && (
          <div>
            <button
              type="button"
              className={css.teacherBookBtn}
              onClick={onBook}
            >
              Book trial lesson
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default TeacherItem;
