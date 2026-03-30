"use client";

import { TeacherLevels } from "@/types/type";
import { TeachersFilterProps } from "../TeachersFilter";
import Select, { SingleValue } from "react-select";
import { levels } from "@/constants/teacherSkills";
import css from "./TeachersFilterLvl.module.module.css";

export interface LevelOption {
  value: TeacherLevels;
  label: string;
}

const TeachersFilterLvl = ({ setFilters }: TeachersFilterProps) => {
  const handleChange = (newValue: SingleValue<LevelOption>) => {
    setFilters((prev) => ({
      ...prev,
      levels: newValue ? [newValue.value] : null,
    }));
  };

  return (
    <div className={css.filterItemBox}>
      <label className={css.filterLabel} htmlFor="levels">
        Level of knowledge
      </label>
      <Select<LevelOption, false>
        id="levels"
        instanceId="levels-select"
        placeholder="Level"
        onChange={handleChange}
        isClearable
        options={levels}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "none",
            outline: "none",
            width: "198px",
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

export default TeachersFilterLvl;
