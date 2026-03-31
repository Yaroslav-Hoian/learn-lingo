"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import css from "../RegisterForm/RegisterForm.module.css";
import { useState } from "react";
import { loginSchema } from "@/lib/validation/ragisterValidations";
import { auth } from "@/lib/firebase";
import { InferType } from "yup";
import { FirebaseError } from "firebase/app";

// Типізація на основі схеми
type LoginFormValues = InferType<typeof loginSchema>;

const LoginForm = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      setFirebaseError(null);
      await signInWithEmailAndPassword(auth, data.email, data.password);

      onClose();
      router.push("/teachers");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/invalid-credential") {
          setFirebaseError("Invalid email or password");
        } else {
          setFirebaseError(error.message);
        }
      } else {
        setFirebaseError("Something went wrong. Please try again.");
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
            className={errors.email ? css.inputError : ""}
          />
          {errors.email && (
            <p className={css.errorText}>{errors.email.message}</p>
          )}
        </div>

        <div className={css.inputWrapper}>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className={errors.password ? css.inputError : ""}
          />
          {errors.password && (
            <p className={css.errorText}>{errors.password.message}</p>
          )}
        </div>

        {firebaseError && <p className={css.mainError}>{firebaseError}</p>}
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
