"use client";

import { TeacherPrices } from "@/types/type";
import { TeachersFilterProps } from "../TeachersFilter";
import Select, { SingleValue } from "react-select";
import { prices } from "@/constants/teacherSkills";
import css from "./TeachersFilterPrice.module.css";

export interface PriceOption {
  value: TeacherPrices;
  label: string;
}

const TeachersFilterPrice = ({ setFilters }: TeachersFilterProps) => {
  const handleChange = (newValue: SingleValue<PriceOption>) => {
    setFilters((prev) => ({
      ...prev,
      prices: newValue ? [newValue.value] : null,
    }));
  };
  return (
    <div className={css.filterItemBox}>
      <label className={css.filterLabel} htmlFor="prices">
        Price
      </label>
      <Select<PriceOption, false>
        id="prices"
        instanceId="prices-select"
        placeholder="Price"
        onChange={handleChange}
        isClearable
        options={prices}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "none",
            outline: "none",
            width: "144px",
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

export default TeachersFilterPrice;
