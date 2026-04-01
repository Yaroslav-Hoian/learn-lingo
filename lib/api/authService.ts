import { LoginDataProps, RegisterDataProps } from "@/types/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

export const loginUser = async ({ email, password }: LoginDataProps) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  return userCredential.user;
};

export const registerUser = async ({
  email,
  password,
  name,
}: RegisterDataProps) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
  await updateProfile(userCredential.user, { displayName: name });
  return userCredential.user;
};

export const logoutUser = async () => {
  await auth.signOut();
};
