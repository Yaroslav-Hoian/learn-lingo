import { languages } from "@/constants/teacherSkills";
import { TeachersFilterProps } from "../TeachersFilter";
import { TeacherLanguages } from "@/types/type";

const TeachersFilterLanguages = ({ setFilters }: TeachersFilterProps) => {
  return (
    <div>
      <label htmlFor="languages">Languages</label>
      <select
        id="languages"
        name="languages"
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            languages: [e.target.value as TeacherLanguages],
          }))
        }
      >
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TeachersFilterLanguages;
