import style from "./NavBar.module.scss";
import { BrowserView, MobileView } from "react-device-detect";

function NavBar() {
  return (
    <div className={style.navbar}>
      <div className={style.icon}>
        <BrowserView>
          <img className={style.logo} src="./images/logo.svg" alt="" />
        </BrowserView>
        {/* <MobileView>
          <img className={style.logo} src="./images/logo_mobile.svg" alt="" />
        </MobileView> */}
      </div>
      <nav className={style.links}>
        <ul className={style.links}>
          <a href="#top">About</a>
          <h1>/</h1>
          <a href="#skills">Skills</a> <h1>/</h1>
          <a href="#projects">Projects</a>
          <h1>/</h1>
          <a href="../Sirvan_Doukchi_CV.pdf" target="_blank">
            Resume
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
