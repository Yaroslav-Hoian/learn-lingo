"use client";

import { getAllTeachers } from "@/lib/api/teachers";
import { Teacher } from "@/types/type";
import { useEffect, useState } from "react";
// import NoFindTeacher from "./NoFindTeacher/NoFindTeacher";
import TeacherItem from "./TeacherItem/TeacherItem";
interface TeachersGalleryProps {
  filteredTeacher?: Teacher[];
  // filters?: TeacherFilter;
}

export default function TeachersGallery({
  filteredTeacher,
  // filters,
}: TeachersGalleryProps) {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [teachersPerPage, setTeachersPerPage] = useState(4);
  const [favoritesPerPage, setFavoritesPerPage] = useState(4);

  useEffect(() => {
    const getTeachersData = async () => {
      const data = await getAllTeachers(teachersPerPage);
      setTeachers(data);
      console.log("Teachers data:", data);
    };

    getTeachersData();
  }, [teachersPerPage]);

  const handleLoadMore = () => {
    setTeachersPerPage((prev) => prev + 4);
  };

  const favoritesShowMore = () => {
    setFavoritesPerPage((prev) => (prev += 4));
  };

  return (
    <div>
      <ul>
        {filteredTeacher
          ? filteredTeacher
              ?.slice(0, teachersPerPage)
              ?.map((teacher) => (
                <TeacherItem key={teacher.id} teach={teacher} />
              ))
          : teachers?.map((teach) => (
              <TeacherItem key={teach.id} teach={teach} />
            ))}
        {/* {filteredTeacher?.length === 0 && <NoFindTeacher />} */}
      </ul>
      {teachers?.length < 30 && !filteredTeacher && (
        <button type="button" onClick={handleLoadMore}>
          Show more
        </button>
      )}
      {(filteredTeacher?.length ?? 0) > favoritesPerPage && (
        <button type="button" onClick={favoritesShowMore}>
          Show more
        </button>
      )}
    </div>
  );
}
