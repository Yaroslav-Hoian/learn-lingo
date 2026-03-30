"use client";

import TeachersFilter from "@/components/TeachersFilter/TeachersFilter";
import TeachersGallery from "@/components/TeachersGallery/TeachersGallery";
import { TeacherFilter } from "@/types/type";
import { useState } from "react";
import css from "./page.module.css";

const Teachers = () => {
  const [filters, setFilters] = useState<TeacherFilter>({
    languages: null,
    levels: null,
    prices: null,
  });

  return (
    <section className={css.teachersPage}>
      <div className={css.container}>
        <TeachersFilter setFilters={setFilters} />
        <TeachersGallery filters={filters} />
      </div>
    </section>
  );
};

export default Teachers;
