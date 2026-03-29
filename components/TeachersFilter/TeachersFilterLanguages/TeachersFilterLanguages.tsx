"use client";

import { languages } from "@/constants/teacherSkills";
import { TeachersFilterProps } from "../TeachersFilter";
import { TeacherLanguages } from "@/types/type";
import Select, { SingleValue } from "react-select";
import makeAnimated from "react-select/animated";
export interface LanguageOption {
  value: TeacherLanguages;
  label: string;
}

const animatedComponents = makeAnimated();

const TeachersFilterLanguages = ({ setFilters }: TeachersFilterProps) => {
  const handleChange = (newValue: SingleValue<LanguageOption>) => {
    setFilters((prev) => ({
      ...prev,
      languages: newValue ? [newValue.value] : null,
    }));
  };

  return (
    <div>
      <label htmlFor="languages">Languages</label>
      <Select<LanguageOption, false>
        id="languages"
        instanceId="languages-select"
        components={animatedComponents}
        options={languages}
        onChange={handleChange}
        isClearable
        placeholder="Language"
      />
    </div>
  );
};

export default TeachersFilterLanguages;
