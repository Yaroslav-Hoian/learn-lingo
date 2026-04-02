"use client";

import { TeachersItemProps } from "@/components/TeachersGallery/TeacherItem/TeacherItem";
import Image from "next/image";
import css from "./BookForm.module.css";
import { useAuth } from "@/providers/AuthProvider";
import { useForm } from "react-hook-form";
import { bookSchema } from "@/lib/validation/bookValidation";
import { InferType } from "yup";
import { createBooking } from "@/lib/api/bookService";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { bookReasons } from "@/constants/bookReasons";
import IconJust from "@/components/Icons/Icons";

type BookFormValues = InferType<typeof bookSchema>;

interface BookFormProps {
  onClose: () => void;
}

const BookForm = ({ teach, onClose }: TeachersItemProps & BookFormProps) => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookFormValues>({
    resolver: yupResolver(bookSchema),
    defaultValues: {
      lessonType: "Career and business",
      email: user?.email || "",
    },
  });

  const onSubmit = async (data: BookFormValues) => {
    try {
      const fullBookingData = {
        ...data,
        teacherId: teach.id as string,
        teacherName: teach.name as string,
        userId: user?.uid as string,
      };

      await createBooking(fullBookingData);

      toast.success("Lesson booked successfully!");
      onClose();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className={css.formContainer}>
      <div className={css.formHeader}>
        <h2 className={css.formTitle}>Book trial lesson</h2>
        <p className={css.formDescription}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className={css.teacherInfo}>
          <Image
            src={teach.avatar_url}
            alt={teach.name}
            width={44}
            height={44}
            style={{ borderRadius: "50%" }}
          />
          <div className={css.teacherDetails}>
            <p className={css.yourTeacher}>Your teacher</p>
            <p className={css.teacherName}>
              {teach.name} {teach.surname}
            </p>
          </div>
        </div>
      </div>

      <h3 className={css.formSubTitle}>
        What is your main reason for learning English?
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.radioGroup}>
          {bookReasons.map((reason) => (
            <label key={reason} className={css.radioLabel}>
              <input
                className={`${css.visuallyHidden} ${css.realRadio}`}
                type="radio"
                value={reason}
                {...register("lessonType")}
              />
              <span className={css.svgWrapper}>
                <IconJust
                  width={24}
                  height={24}
                  className={css.iconNonActive}
                  icon="RadioButton-NonActive"
                />
                <IconJust
                  width={10}
                  height={10}
                  icon="RadioButton-Active"
                  className={css.iconActive}
                />
              </span>
              {reason}
            </label>
          ))}
        </div>
        <div className={css.inputGroup}>
          <div className={css.inputWrapper}>
            <input
              {...register("fullName")}
              placeholder="Full Name"
              className={css.input}
            />
            {errors.fullName && (
              <span className={css.errorText}>{errors.fullName.message}</span>
            )}
          </div>
          <div className={css.inputWrapper}>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={css.input}
            />
            {errors.email && (
              <span className={css.errorText}>{errors.email.message}</span>
            )}
          </div>
          <div className={css.inputWrapper}>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone")}
              className={css.input}
            />
            {errors.phone && (
              <span className={css.errorText}>{errors.phone.message}</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={css.formButton}
        >
          {isSubmitting ? "Booking..." : "Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
