import css from "./HeroStat.module.css";

const HeroStat = () => {
  return (
    <div className={css.heroStat}>
      <ul className={css.statList}>
        <li className={css.statItem}>
          <b className={css.statValue}>32,000 +</b>
          <p className={css.statDescription}>Experienced tutors</p>
        </li>
        <li className={css.statItem}>
          <b className={css.statValue}>300,000 +</b>
          <p className={css.statDescription}>5-star tutor reviews</p>
        </li>
        <li className={css.statItem}>
          <b className={css.statValue}>120 +</b>
          <p className={css.statDescription}>Subjects taught</p>
        </li>
        <li className={css.statItem}>
          <b className={css.statValue}>200 +</b>
          <p className={css.statDescription}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
};

export default HeroStat;
