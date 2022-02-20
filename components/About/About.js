import style from "./About.module.scss";
import { socialData } from "../../public/social";
import { ExternalIcon } from "../../public/icons";
import Social from "../social/social";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
// import * as rdd from "react-device-detect";
// rdd.isMobile = true;

function About() {
  return (
    <section className={style.container}>
      {isBrowser ? <div></div> : null}

      <div className={style.about_container}>
        <div className={style.image_container}>
          <img src="./images/image.svg" alt="" />
          {isBrowser ? <div className={style.image_divider}></div> : null}
        </div>
        {isMobile ? <div className={style.image_divider}></div> : null}
        <div className={style.about_right}>
          <div className={style.about_title}>
            <h1>Hi, I'm Sirvan</h1>
          </div>
          <div className={style.about_subtitle}>
            <h2>Full Stack Developer based in Sydney</h2>
          </div>
          <div className={style.about_content}>
            <BrowserView>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, natus officia quae laboriosam veritatis molestiae
                facilis error architecto odit, molestias nobis, perspiciatis
                aliquid! Dolorum, natus officia quae laboriosam veritatis
                molestiae facilis error architecto odit, molestias nobis,
                perspiciatis aliquid! Ipsum, quibusdam! Eius maiores repudiandae
                illum modi.
              </p>
            </BrowserView>
            <MobileView>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum,
              </p>
            </MobileView>
          </div>
        </div>
      </div>
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
    </section>
  );
}

export default About;
