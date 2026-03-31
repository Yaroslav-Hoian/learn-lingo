"use client";

import TeachersFilter from "@/components/TeachersFilter/TeachersFilter";
import TeachersGallery from "@/components/TeachersGallery/TeachersGallery";
import { TeacherFilter } from "@/types/type";
import { useEffect, useState } from "react";
import css from "./page.module.css";
import ScrollToTop from "@/components/buttons/ButtonScrollToTop/ButtonScrollToTop";

const Teachers = () => {
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

  return (
    <section className={css.teachersPage}>
      <div className={css.container}>
        <div className={css.subContainer}>
          <TeachersFilter setFilters={setFilters} />
          <TeachersGallery filters={filters} />
        </div>
        <ScrollToTop isVisible={showScrollBtn} onClick={handleScrillToTop} />
      </div>
    </section>
  );
};

export default Teachers;
