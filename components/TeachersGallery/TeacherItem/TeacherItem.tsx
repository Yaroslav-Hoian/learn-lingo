import { Teacher } from "@/types/type";

interface TeachersItemProps {
  teach: Teacher;
}

const TeacherItem = ({ teach }: TeachersItemProps) => {
  return (
    <li>
      <div>
        <p>Name: {teach.name}</p>
        <p>Languages: {teach.languages.join(", ")}</p>
        <p>Price: {teach.price_per_hour}</p>
      </div>
    </li>
  );
};

export default TeacherItem;
