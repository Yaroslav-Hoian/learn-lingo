"use client";

import { TeacherFilter } from "@/types/type";
import TeachersFilterLanguages from "./TeachersFilterLanguages/TeachersFilterLanguages";
import TeachersFilterLvl from "./TeachersFilterLvl/TeachersFilterLvl";
import TeachersFilterPrice from "./TeachersFilterPrice/TeachersFilterPrice";
import css  from "./TeachersFilter.module.css";

export interface TeachersFilterProps {
  setFilters: React.Dispatch<React.SetStateAction<TeacherFilter>>;
}

const TeachersFilter = ({ setFilters }: TeachersFilterProps) => {
  return (
    <div className={css. filtersContainer}>
      <TeachersFilterLanguages setFilters={setFilters} />
      <TeachersFilterLvl setFilters={setFilters} />
      <TeachersFilterPrice setFilters={setFilters} />
    </div>
  );
};

export default TeachersFilter;
