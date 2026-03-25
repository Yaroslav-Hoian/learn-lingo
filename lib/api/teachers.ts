import { Teacher } from "@/types/type";
import { db } from "@/lib/firebase";
import { ref, get, child } from "firebase/database";

export async function getAllTeachers(limit: number) {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, "teachers"));
    if (!snapshot.exists()) return [];
    const teachersObj = snapshot.val() as Record<string, Teacher>;

    const teachersArray = Object.entries(teachersObj).map(
      ([id, value]: [string, Teacher]) => ({
        id,
        ...value,
      }),
    );

    return teachersArray.slice(0, limit);
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return [];
  }
}
