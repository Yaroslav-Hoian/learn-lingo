"use client";

import TeachersFilter from "@/components/TeachersFilter/TeachersFilter";
import TeachersGallery from "@/components/TeachersGallery/TeachersGallery";
import { getAllTeachersFiltered } from "@/lib/api/teachers";
import { Teacher, TeacherFilter } from "@/types/type";
import { useEffect, useState } from "react";

// export interface TeachersProps {
//   filteredTeacher: Teacher[];
//   setFilteredTeacher: (filteredTeacher: Teacher[]) => void;
// }

const Teachers = () => {
  const [filteredTeacher, setFilteredTeacher] = useState<Teacher[]>([]);
  const [filters, setFilters] = useState<TeacherFilter>({
    languages: null,
    levels: null,
    prices: null,
  });

  useEffect(() => {
    const getFilteredTeachers = async () => {
      try {
        const filteredTeachers = await getAllTeachersFiltered(filters);
        setFilteredTeacher(filteredTeachers);
      } catch (error) {
        console.error("Error fetching filtered teachers:", error);
      }
    };

    getFilteredTeachers();
  }, [filters, setFilteredTeacher]);
  return (
    <div>
      <TeachersFilter setFilters={setFilters} />
      <TeachersGallery filteredTeacher={filteredTeacher} />
    </div>
  );
};

export default Teachers;
