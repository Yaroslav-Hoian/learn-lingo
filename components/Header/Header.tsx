"use client";

import Link from "next/link";
import css from "./Header.module.css";
import IconJust from "../Icons/Icons";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "@/Theme/ThemeSwitcher";
import { useState } from "react";
import Modal from "../Modal/Modal";
import LoginForm from "../Auth/LogInForm/LogInForm";
import RegisterForm from "../Auth/RegisterForm/RegisterForm";

const Header = () => {
  const [activeModal, setActiveModal] = useState<"login" | "register" | null>(
    null,
  );
  const pathName = usePathname();

  const closeModal = () => setActiveModal(null);
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
            <button
              type="button"
              className={css.logInBtn}
              onClick={() => setActiveModal("login")}
            >
              <IconJust
                width={20}
                height={20}
                icon="log-in"
                stroke="var(--accent-color)"
                fill="none"
              />
              Log in
            </button>
            <button
              type="button"
              className={css.registrationBtn}
              onClick={() => setActiveModal("register")}
            >
              Registration
            </button>
          </div>
        </div>
        {activeModal && (
          <Modal onClose={closeModal}>
            {activeModal === "login" ? <LoginForm /> : <RegisterForm />}
          </Modal>
        )}
      </div>
    </header>
  );
};

export default Header;
