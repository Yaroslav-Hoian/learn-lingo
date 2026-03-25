"use client";

import { getAllTeachers } from "@/lib/api/teachers";
import { Teacher } from "@/types/type";
import { useEffect, useState } from "react";

export type TeacherWithId = Teacher & { id: string };

export default function TeachersGallery() {
  const [teachers, setTeachers] = useState<TeacherWithId[]>([]);
  const [teachersPerPage, setTeachersPerPage] = useState(4);
  const [hasMore, setHasMore] = useState(true);
  //   const [favoritesPerPage, setFavoritesPerPage] = useState(4);

  useEffect(() => {
    const getTeachersData = async () => {
      const data = await getAllTeachers(teachersPerPage);
      setTeachers(data);
      console.log("Fetched:", data);
      console.log(teachersPerPage);

      setHasMore(data.length === teachersPerPage);
      console.log("Fetched teachers:", data.length);
    };

    getTeachersData();
  }, [teachersPerPage]);

  const handleLoadMore = () => {
    setTeachersPerPage((prev) => prev + 4);
  };

  //   const favoritesShowMore = () => {
  //     setFavoritesPerPage((prev) => (prev += 4));
  //   };

  return (
    <div>
      <h1>Teachers</h1>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <h3>
              {teacher.name} {teacher.surname}
            </h3>
            <p>Languages: {teacher.languages.join(", ")}</p>
            <p>Price: ${teacher.price_per_hour}/hour</p>
          </li>
        ))}
      </ul>
      {hasMore && <button onClick={handleLoadMore}>Load more</button>}
    </div>
  );
}
