"use client";

import { useState } from "react";
import styles from "./ThemeSwitcher.module.css";

const themes = ["theme1", "theme2", "theme3", "theme4", "theme5"];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);

  const changeTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.palette} ${open ? styles.open : ""}`}>
        {themes.map((theme) => (
          <button
            key={theme}
            onClick={() => changeTheme(theme)}
            className={styles.color}
            data-theme={theme}
          />
        ))}
      </div>
      <button
        className={styles.toggle}
        onClick={() => setOpen((prev) => !prev)}
      />
    </div>
  );
}
