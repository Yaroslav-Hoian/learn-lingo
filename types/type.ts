export interface Teacher {
  id: string;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
}
export type TeacherLanguages =
  | "English"
  | "German"
  | "Spanish"
  | "French"
  | "Mandarin Chinese"
  | "Italian"
  | "Korean"
  | "Vietnamese";
export type TeacherLevels =
  | "A1 Beginner"
  | "A2 Elementary"
  | "B1 Intermediate"
  | "B2 Upper-Intermediate"
  | "C1 Advanced"
  | "C2 Proficient";
export type TeacherPrices =
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35;

export interface TeacherFilter {
  languages?: TeacherLanguages[] | null;
  levels?: TeacherLevels[] | null;
  prices?: TeacherPrices[] | null;
}
