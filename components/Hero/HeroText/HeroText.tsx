import Link from "next/link";
import css from "./HeroText.module.css";

const HeroText = () => {
  return (
    <div className={css.heroText}>
      <div className={css.textBox}>
        <h1 className={css.heroTitle}>
          Unlock your potential with the best{" "}
          <span className={css.highlight}>language</span> tutors
        </h1>
        <p className={css.heroDescription}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
      </div>
      <Link className={css.getStartedButton} href="/teachers">
        Get started
      </Link>
    </div>
  );
};

export default HeroText;
