import { Teacher, TeacherFilter } from "@/types/type";
import { db } from "@/lib/firebase";
import { ref, get, child } from "firebase/database";

export async function getAllTeachersFiltered(
  filters: TeacherFilter,
): Promise<Teacher[]> {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, "teachers"));
    if (!snapshot.exists()) return [];

    const teachersObj = snapshot.val() as Record<string, Teacher>;
    let teachers = Object.entries(teachersObj).map(([id, value]) => ({
      ...value,
      id,
    }));

    if (filters.languages?.length) {
      teachers = teachers.filter((t) =>
        filters.languages!.some((lang) => t.languages.includes(lang)),
      );
    }
    if (filters.levels?.length) {
      teachers = teachers.filter((t) =>
        filters.levels!.some((lvl) => t.levels.includes(lvl)),
      );
    }
    if (filters.prices?.length) {
      teachers = teachers.filter(
        (t) => t.price_per_hour === filters.prices![0],
      );
    }

    return teachers;
  } catch (error) {
    console.error(error);
    return [];
  }
}
