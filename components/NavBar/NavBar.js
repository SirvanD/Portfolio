import style from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={style.navbar}>
      <div className={style.icon}>
        <img src="./images/logo.png" alt="" />
      </div>
      <nav className={style.links}>
        <a href="">About</a> <h1>/</h1>
        <a href="">Skills</a> <h1>/</h1>
        <a href="">Projects</a>
        <h1>/</h1>
        <a href="">Resume</a>
      </nav>
    </div>
  );
}

export default NavBar;
