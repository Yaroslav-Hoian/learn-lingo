"use client";

import { getAllTeachersFiltered } from "@/lib/api/teachers";
import { Teacher, TeacherFilter } from "@/types/type";
import { useEffect, useState } from "react";
import NoFindTeacher from "./NoFindTeacher/NoFindTeacher";
import TeacherItem from "./TeacherItem/TeacherItem";
import css from "./TeachersGallery.module.css";
import Loading from "@/app/loading";
import Modal from "../Modal/Modal";
import BookForm from "../Auth/BookForm/BookForm";
interface TeachersGalleryProps {
  filters: TeacherFilter;
}

export default function TeachersGallery({ filters }: TeachersGalleryProps) {
  const [allTeachers, setAllTeachers] = useState<Teacher[]>([]);
  const [filteredData, setFilteredData] = useState<Teacher[]>([]);
  const [limit, setLimit] = useState(4);
  const [loading, setLoading] = useState(true);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      const data = await getAllTeachersFiltered({
        languages: null,
        levels: null,
        prices: null,
      });
      setAllTeachers(data);
      setFilteredData(data);
      setLoading(false);
    };
    loadInitialData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const isEmpty =
        !filters.languages?.length &&
        !filters.levels?.length &&
        !filters.prices?.length;

      if (isEmpty) {
        setFilteredData(allTeachers);
      } else {
        let filtered = [...allTeachers];
        if (filters.languages?.length) {
          filtered = filtered.filter((t) =>
            filters.languages!.some((l) => t.languages.includes(l)),
          );
        }
        if (filters.levels?.length) {
          filtered = filtered.filter((t) =>
            filters.levels!.some((l) => t.levels.includes(l)),
          );
        }
        if (filters.prices?.length) {
          filtered = filtered.filter(
            (t) => t.price_per_hour === Number(filters.prices![0]),
          );
        }
        setFilteredData(filtered);
      }
      setLimit(4);
    };

    applyFilters();
  }, [filters, allTeachers]);

  const handleLoadMore = () => {
    setLimit((prev) => prev + 4);
  };

  const visibleTeachers = filteredData.slice(0, limit);
  const hasMore = limit < filteredData.length;

  if (loading) return <Loading />;

  return (
    <div className={css.teachersGallery}>
      <ul className={css.teachersList}>
        {visibleTeachers.length > 0 ? (
          visibleTeachers.map((teacher) => (
            <TeacherItem
              key={teacher.id}
              teach={teacher}
              filters={filters}
              onBook={() => setSelectedTeacher(teacher)}
            />
          ))
        ) : (
          <NoFindTeacher />
        )}
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={handleLoadMore}
          className={css.loadMoreButton}
        >
          Load more
        </button>
      )}
      {selectedTeacher && (
        <Modal onClose={() => setSelectedTeacher(null)}>
          <BookForm teach={selectedTeacher} />
        </Modal>
      )}
    </div>
  );
}
