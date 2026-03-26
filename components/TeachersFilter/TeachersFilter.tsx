import { TeacherFilter } from "@/types/type";
import TeachersFilterLanguages from "./TeachersFilterLanguages/TeachersFilterLanguages";

export interface TeachersFilterProps {
  setFilters: React.Dispatch<React.SetStateAction<TeacherFilter>>;
}

const TeachersFilter = ({ setFilters }: TeachersFilterProps) => {
  return (
    <div>
      <TeachersFilterLanguages setFilters={setFilters} />
    </div>
  );
};

export default TeachersFilter;
