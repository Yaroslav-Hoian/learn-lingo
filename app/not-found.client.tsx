"use client";

import css from "./page.module.css";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={css.notFoundContainer}>
      <h1 className={css.notFoundTitle}>404 - Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
