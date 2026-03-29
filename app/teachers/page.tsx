"use client";

import TeachersFilter from "@/components/TeachersFilter/TeachersFilter";
import TeachersGallery from "@/components/TeachersGallery/TeachersGallery";
import { TeacherFilter } from "@/types/type";
import { useState } from "react";

const Teachers = () => {
  const [filters, setFilters] = useState<TeacherFilter>({
    languages: null,
    levels: null,
    prices: null,
  });

  return (
    <div>
      <TeachersFilter setFilters={setFilters} />
      <TeachersGallery filters={filters} />
    </div>
  );
};

export default Teachers;
