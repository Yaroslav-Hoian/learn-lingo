import * as Yup from "yup";

export const bookSchema = Yup.object().shape({
    lessonType: Yup.string()
        .oneOf(["Career and business", "Lesson for kids", 'Living abroad', 'Exams and coursework', 'Culture, travel or hobby'], "Invalid lesson type")
        .required("Lesson type is required"),
    fullName: Yup.string()
        .min(2, "Full Name must be at least 4 characters")
        .max(32, "Full Name must be no more than 62 characters")
        .required("Full Name is required"),
    email: Yup.string()
    .email("Wrong email format")
    .max(64, "Email must be no more than 64 characters")
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^\+38\s?\(?\d{3}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/,
      "Wrong phone number format. Example: +38 (XXX) XXX XX XX",
    )
    .required("Phone number is required"),
});
