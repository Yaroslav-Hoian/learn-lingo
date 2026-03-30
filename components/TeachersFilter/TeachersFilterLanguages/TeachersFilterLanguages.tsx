"use client";

import { languages } from "@/constants/teacherSkills";
import { TeachersFilterProps } from "../TeachersFilter";
import { TeacherLanguages } from "@/types/type";
import Select, { SingleValue } from "react-select";
import css from "./TeachersFilterLanguages.module.css";
export interface LanguageOption {
  value: TeacherLanguages;
  label: string;
}

const TeachersFilterLanguages = ({ setFilters }: TeachersFilterProps) => {
  const handleChange = (newValue: SingleValue<LanguageOption>) => {
    setFilters((prev) => ({
      ...prev,
      languages: newValue ? [newValue.value] : null,
    }));
  };

  return (
    <div className={css.filterItemBox}>
      <label className={css.filterLabel} htmlFor="languages">
        Languages
      </label>
      <Select<LanguageOption, false>
        id="languages"
        instanceId="languages-select"
        options={languages}
        onChange={handleChange}
        isClearable
        placeholder="Language"
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "none",
            outline: "none",
            width: "221px",
            height: "48px",
            background: "#fff",
            borderRadius: "14px",
            fontSize: "18px",
            fontWeight: "500",
            cursor: "pointer",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "#8a8a89",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "1.111",
            color: state.isFocused
              ? "var(--dark-color)"
              : "rgba(18, 20, 23, 0.2)",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "14px",
            boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
          }),
        }}
      />
    </div>
  );
};

export default TeachersFilterLanguages;
