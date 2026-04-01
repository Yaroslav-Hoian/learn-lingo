"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "../RegisterForm/RegisterForm.module.css";
import { registerSchema } from "@/lib/validation/ragisterValidations";
import { InferType } from "yup";
import { FirebaseError } from "firebase/app";
import { registerUser } from "@/lib/api/authService";
import { toast } from "react-hot-toast";

type RegisterFormValues = InferType<typeof registerSchema>;

interface RegisterFormProps {
  onClose: () => void;
}

const RegisterForm = ({ onClose }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    try {
      await registerUser(data);
      onClose();
      toast.success("Registration successful!");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered.");
        } else {
          toast.error("Registration failed. Please try later.");
        }
      }
    }
  };

  return (
    <div className={css.formContainer}>
      <div className={css.formHeader}>
        <h2 className={css.formTitle}>Registration</h2>
        <p className={css.formDescription}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.inputWrapper}>
          <input
            {...register("name")}
            placeholder="Name"
            className={css.input}
          />
          {errors.name && (
            <span className={css.errorText}>{errors.name.message}</span>
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
            type="password"
            placeholder="Password"
            {...register("password")}
            className={css.input}
          />
          {errors.password && (
            <span className={css.errorText}>{errors.password.message}</span>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={css.formButton}
        >
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
