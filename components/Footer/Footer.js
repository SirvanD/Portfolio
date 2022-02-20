import Social from "../Social/Social";
import style from "./Footer.module.scss";
import { socialData } from "../../public/social";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.icon}>
        <h4>
          &copy; 2022, Site powered by React, NextJS, styled with SASS, and
          deployed on Vercel
        </h4>
      </div>

      <nav className={style.links}>
        <h3>Connect with me</h3>
        <div className={style.social_container}>
          <ul className={style.socials}>
            {socialData.map((social, index) => (
              <Social
                classNames={[social.className, "socialAccent"]}
                icon={social.icon}
                aValues={social.aValues}
                key={index}
              />
            ))}
          </ul>
        </div>
      </nav>

      {/* <div className={style.connect}></div> */}
    </div>
  );
}

export default Footer;
