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
