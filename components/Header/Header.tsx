import Link from "next/link";
import css from "./Header.module.css";
import IconJust from "../Icons/Icons";

interface HeaderProps {
  className: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <div className={css.subContainer}>
        <div className={css.headerGrid}>
          <Link className={css.logo} href="/">
            <IconJust width={133} height={28} icon="logo" />
          </Link>
          <nav>
            <ul className={css.headerNav}>
              <li>
                <Link className={css.headerLinkNav} href="/" aria-label="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={css.headerLinkNav}
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
                stroke="#f4c550"
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
