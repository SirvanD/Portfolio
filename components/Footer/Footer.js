import Social from "../Social/Social";
import style from "./Footer.module.scss";
import { socialData } from "../../public/social";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.icon}>
        <h4>
          &copy; 2022, Designed by Sirvan Doukchi, Inspired by
          <a
            className={style.link}
            href="https://www.benlammers.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ben Lammers
          </a>
          <h4 className={style.tech_stack}>
            Powered by React, NextJS, SASS, and deployed to Vercel
          </h4>
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
    </div>
  );
}

export default Footer;
