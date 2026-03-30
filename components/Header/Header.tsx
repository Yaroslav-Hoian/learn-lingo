"use client";

import Link from "next/link";
import css from "./Header.module.css";
import IconJust from "../Icons/Icons";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "@/Theme/ThemeSwitcher";

const Header = () => {
  const pathName = usePathname();
  return (
    <header className={css.container}>
      <ThemeSwitcher />

      <div className={css.subContainer}>
        <div className={css.headerGrid}>
          <Link className={css.logo} href="/">
            <IconJust width={133} height={28} icon="logo" />
          </Link>
          <nav>
            <ul className={css.headerNav}>
              <li>
                <Link
                  className={`${css.headerLinkNav} ${pathName === "/" ? css.headerLinkNavActive : ""}`}
                  href="/"
                  aria-label="Home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${css.headerLinkNav} ${pathName === "/teachers" ? css.headerLinkNavActive : ""}`}
                  href="/teachers"
                  aria-label="Teachers"
                >
                  Teachers
                </Link>
              </li>
            </ul>
          </nav>
          <div className={css.headerActions}>
            <button className={css.logInBtn}>
              <IconJust
                width={20}
                height={20}
                icon="log-in"
                stroke="var(--accent-color)"
                fill="none"
              />
              Log in
            </button>
            <button className={css.registrationBtn}>Registration</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
