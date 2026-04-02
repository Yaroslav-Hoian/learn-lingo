import { get, ref, remove, set } from "firebase/database";
import { db } from "../firebase";

export const addTeacherToFavorites = async (
  userId: string,
  teacherId: string,
) => {
  const favoriteRef = ref(db, `users/${userId}/favorites/${teacherId}`);
  await set(favoriteRef, true);
};

export const removeTeacherFromFavorites = async (
  userId: string,
  teacherId: string,
) => {
  const favoriteRef = ref(db, `users/${userId}/favorites/${teacherId}`);
  await remove(favoriteRef);
};

export const getFavoriteTeachersIds = async (
  userId: string,
): Promise<string[]> => {
  const favoritesRef = ref(db, `users/${userId}/favorites`);
  const snapshot = await get(favoritesRef);

  if (snapshot.exists()) {
    return Object.keys(snapshot.val());
  }
  return [];
};
