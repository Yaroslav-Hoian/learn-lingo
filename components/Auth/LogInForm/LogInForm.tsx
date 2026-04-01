"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "../RegisterForm/RegisterForm.module.css";
import { loginSchema } from "@/lib/validation/ragisterValidations";
import { InferType } from "yup";
import { FirebaseError } from "firebase/app";
import { loginUser } from "@/lib/api/authService";
import toast from "react-hot-toast";

type LoginFormValues = InferType<typeof loginSchema>;

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      await loginUser(data);
      onClose();
      toast.success("Login successful!");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid email or password");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    }
  };

  return (
    <div className={css.formContainer}>
      <div className={css.formHeader}>
        <h2 className={css.formTitle}>Log In</h2>
        <p className={css.formDescription}>
          Welcome back! Please enter your credentials to access your account.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
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
          {isSubmitting ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
