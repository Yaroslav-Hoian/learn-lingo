import css from "./NoFindTeacher.module.css";

const NoFindTeacher = () => {
  return (
    <div className={css.noFindTeacherBox}>
      <h4 className={css.noFindTeacherTitle}>Sorry...</h4>
      <p className={css.noFindTeacherText}>
        No find any teacher by these parameters
      </p>
    </div>
  );
};

export default NoFindTeacher;
