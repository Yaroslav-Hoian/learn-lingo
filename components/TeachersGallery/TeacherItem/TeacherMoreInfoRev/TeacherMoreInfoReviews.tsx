import IconJust from "@/components/Icons/Icons";
import { TeachersItemProps } from "../TeacherItem";
import css from "./TeacherMoreInfoReviews.module.css";

const TeacherMoreInfoReviews = ({ teach }: TeachersItemProps) => {
  return (
    <ul className={css.teacherMoreInfoReviews}>
      {teach.reviews?.map((review, index) => (
        <li key={index} className={css.reviewItem}>
          <div className={css.reviewHeader}>
            <div className={css.reviewAvatarBox}>
              <IconJust
                width={20}
                height={20}
                icon="person"
                fill="var(--dark-color)"
              />
            </div>
            <div className={css.reviewAuthor}>
              <p className={css.reviewAuthorName}>{review.reviewer_name}</p>
              <div className={css.reviewRatingBox}>
                <IconJust
                  width={16}
                  height={16}
                  icon="Star-Empty"
                  fill="#ffc531"
                />
                <p className={css.reviewRating}>{review.reviewer_rating}</p>
              </div>
            </div>
          </div>
          <p className={css.reviewComment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default TeacherMoreInfoReviews;
