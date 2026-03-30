import css from "./page.module.css";
import HeroImg from "@/components/Hero/HeroImg/HeroImg";
import HeroStat from "@/components/Hero/HeroStat/HeroStat";
import HeroText from "@/components/Hero/HeroText/HeroText";

const Home = () => {
  return (
    <section className={css.container}>
      <div className={css.heroGrid}>
        <div className={css.heroContent}>
          <HeroText />
          <HeroImg />
        </div>
        <HeroStat />
      </div>
    </section>
  );
};

export default Home;
