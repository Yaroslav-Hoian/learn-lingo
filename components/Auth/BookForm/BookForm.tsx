import { TeachersItemProps } from "@/components/TeachersGallery/TeacherItem/TeacherItem";
import Image from "next/image";


const BookForm = ({ teach }: TeachersItemProps) => {
  return (
    <div>
      <h2>Book trial lesson</h2>
      <p>
        Our experienced tutor will assess your current level and discuss your
        goals.
      </p>

      {/* Коротка інфо про вчителя */}
      <div>
        <Image
          src={teach.avatar_url}
          alt={teach.name}
          width={44}
          height={44}
          style={{ borderRadius: "50%" }}
        />
        <div>
          <p style={{ fontSize: "12px", color: "#8A8A89" }}>Your teacher</p>
          <p style={{ fontWeight: "500" }}>
            {teach.name} {teach.surname}
          </p>
        </div>
      </div>

      {/* Тут будуть інпути форми: Ім'я, Email, Телефон, Радіо-кнопки */}
      <form>{/* ... логіка форми ... */}</form>
    </div>
  );
};

export default BookForm;