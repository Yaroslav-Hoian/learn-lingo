"use client";

import { Teacher, TeacherFilter } from "@/types/type";
import css from "./TeacherItem.module.css";
import TeacherAvatar from "./TeacherAvatar/TeacherAvatar";
import TeacherHeader from "./TeacherHeader/TeacherHeader";
import TeacherDescr from "./TeacherDescr/TeacherDescr";
import TeacherLvls from "./TeacherLvls/TeacherLvls";
import { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import toast from "react-hot-toast";

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
  const { user } = useAuth();
  const [showInfo, setShowInfo] = useState(false);

  const handleFavoriteClick = () => {
    if (!user) {
      toast.error("Please log in to add to favorites.");
      return;
    }
    toast.success("Added to favorites!");
  };

  const handleBookClick = () => {
    if (!user) {
      toast.success("Please log in to book a lesson.");
      return;
    }
    onBook();
  };

  return (
    <li className={css.teacherItem}>
      <TeacherAvatar teach={teach} />
      <div className={css.teacherInfo}>
        <TeacherHeader onClick={handleFavoriteClick} teach={teach} />
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
              onClick={handleBookClick}
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
