import {
  Teacher,
  TeacherFilter,
  TeacherLanguages,
  TeacherLevels,
  TeacherPrices,
} from "@/types/type";
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
        ...value,
        id,
      }),
    );

    return teachersArray.slice(0, limit);
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return [];
  }
}

export async function getTeachersByLanguage(language: TeacherLanguages) {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, "teachers"));
    if (!snapshot.exists()) return [];
    const teachersObj = snapshot.val() as Record<string, Teacher>;
    const filteredTeachers = Object.values(teachersObj).filter((teacher) =>
      teacher.languages.includes(language),
    );
    return filteredTeachers;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getTeachersByLvl(lvl: TeacherLevels) {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, "teachers"));
    if (!snapshot.exists()) return [];
    const teachersObj = snapshot.val() as Record<string, Teacher>;
    const filteredTeachers = Object.values(teachersObj).filter((teacher) =>
      teacher.levels.includes(lvl),
    );
    return filteredTeachers;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getTeachersByPrice(price: TeacherPrices) {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, "teachers"));
    if (!snapshot.exists()) return [];
    const teachersObj = snapshot.val() as Record<string, Teacher>;
    const filteredTeachers = Object.values(teachersObj).filter(
      (teacher) => teacher.price_per_hour === price,
    );
    return filteredTeachers;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAllTeachersFiltered(filters: TeacherFilter) {
  const { languages, levels, prices } = filters;
  try {
    if (languages?.length && !levels && !prices) {
      const teachersLang = await getTeachersByLanguage(languages[0]);
      return teachersLang;
    } else if (levels?.length && !languages && !prices) {
      const teachersLvl = await getTeachersByLvl(levels[0]);
      return teachersLvl;
    } else if (prices?.length && !languages && !levels) {
      const teachersPrice = await getTeachersByPrice(prices[0]);
      return teachersPrice;
    } else if (languages?.length && levels?.length && !prices) {
      const teachersLang = await getTeachersByLanguage(languages[0]);
      const teachersLvl = await getTeachersByLvl(levels[0]);
      const intersectedTeachers = teachersLang.filter((teacherLvl) => {
        return teachersLvl.some(
          (teacherLang) => teacherLang.id === teacherLvl.id,
        );
      });
      return intersectedTeachers;
    } else if (levels?.length && prices?.length && !languages) {
      const teachersLvl = await getTeachersByLvl(levels[0]);
      const teachersPrice = await getTeachersByPrice(prices[0]);
      const intersectedTeachers = teachersLvl.filter((teacherLvl) => {
        return teachersPrice.some(
          (teacherPrice) => teacherPrice.id === teacherLvl.id,
        );
      });
      return intersectedTeachers;
    } else if (languages?.length && prices?.length && !levels) {
      const teachersLang = await getTeachersByLanguage(languages[0]);
      const teachersPrice = await getTeachersByPrice(prices[0]);
      const intersectedTeachers = teachersLang.filter((teacherLang) => {
        return teachersPrice.some(
          (teacherPrice) => teacherPrice.id === teacherLang.id,
        );
      });
      return intersectedTeachers;
    } else if (languages?.length && levels?.length && prices?.length) {
      const teachersLang = await getTeachersByLanguage(languages[0]);
      const teachersLvl = await getTeachersByLvl(levels[0]);
      const teachersPrice = await getTeachersByPrice(prices[0]);
      const intersectedTeachers = teachersLang.filter((teacherLang) => {
        return teachersLvl.some((teacherLvl) => {
          return teachersPrice.some(
            (teacherPrice) =>
              teacherPrice.id === teacherLvl.id &&
              teacherLvl.id === teacherLang.id,
          );
        });
      });

      return intersectedTeachers;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
