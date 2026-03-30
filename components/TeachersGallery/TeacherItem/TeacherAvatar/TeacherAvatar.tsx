import Image from "next/image";
import { TeachersItemProps } from "../TeacherItem";
import css from "./TeacherAvatar.module.css";
import IconJust from "@/components/Icons/Icons";

const TeacherAvatar = ({ teach }: TeachersItemProps) => {
  return (
    <div className={css.teacherAvatarBox}>
      <IconJust
        className={css.teacherAvatarIcon}
        width={12}
        height={12}
        icon="online"
      />
      <Image
        className={css.teacherAvatar}
        src={teach.avatar_url}
        alt={teach.name}
        width={96}
        height={96}
      />
    </div>
  );
};

export default TeacherAvatar;
