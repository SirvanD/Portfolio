import style from "./Skill.module.scss";
function Skill({ icon, title }) {
  return (
    <li className={style.skill_container}>
      <img className={style.logo} src={icon} alt={title} />
      <h3 className={style.skill_title}>{title}</h3>
    </li>
  );
}

export default Skill;

// const SkillItem = ({ skill }) => {
//    let { logo, title } = skill

//    return (
//      <li className={styles.skillItem}>
//        <img className={styles.logo} src={logo} alt={`${title} logo`} />
//        <h3 className="text--sm font--bold font--heading">{title}</h3>
//      </li>
//    )
// }

// export default SkillItem
