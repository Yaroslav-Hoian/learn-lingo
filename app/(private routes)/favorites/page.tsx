"use client";

import Loading from "@/app/loading";
import ScrollToTop from "@/components/buttons/ButtonScrollToTop/ButtonScrollToTop";
import TeachersFilter from "@/components/TeachersFilter/TeachersFilter";
import TeachersGallery from "@/components/TeachersGallery/TeachersGallery";
import { useAuth } from "@/providers/AuthProvider";
import { TeacherFilter } from "@/types/type";
import { useEffect, useState } from "react";
import css from "../../teachers/teacherPage.module.css";

export default function FavoritesPage() {
  const { user, loading } = useAuth();
  const [filters, setFilters] = useState<TeacherFilter>({
    languages: null,
    levels: null,
    prices: null,
  });
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 1200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrillToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!user) {
      window.location.href = "/";
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return null;

  return (
    <section className={css.teachersPage}>
      <div className={css.container}>
        <div className={css.subContainer}>
          <TeachersFilter setFilters={setFilters} />
          <TeachersGallery
            user={user}
            loading={loading}
            filters={filters}
            isFavoritesPage={true}
          />
        </div>
        <ScrollToTop isVisible={showScrollBtn} onClick={handleScrillToTop} />
      </div>
    </section>
  );
}
