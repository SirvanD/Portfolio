import style from "./About.module.scss";
import { socialData } from "../../public/social";
import { ExternalIcon } from "../../public/icons";
import Social from "../Social/Social";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import React, { useEffect, useState } from "react";
const images = ["./images/image.svg", "./images/image2.svg"];
function About() {
  const [currentImage, setCurrentImage] = useState("./images/image.svg");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={style.container} id="about">
      {isBrowser ? <div></div> : null}

      <div className={style.about_container}>
        <div className={style.image_container}>
          <img src={currentImage} alt="" />
          {isBrowser ? <div className={style.image_divider}></div> : null}
        </div>
        {isMobile ? <div className={style.image_divider}></div> : null}
        <div className={style.about_right}>
          <div className={style.about_title}>
            <h2>Hi, I'm Sirvan</h2>
          </div>
          <div className={style.about_subtitle}>
            <h3>Full Stack Developer based in Sydney</h3>
          </div>
          <div className={style.about_content}>
            <BrowserView>
              <p>
                A recent graduate of General Assembly full-time Software
                Engineering bootcamp who enjoys using logic and reason to find
                elegant and effective solutions to complex problems.
              </p>
              <p>
                I am motivated to learn how to leverage industry leading
                frameworks and approaching everyday as an opportunity to extend
                my knowledge.
              </p>
              <p>
                Shaping ideas and bringing them alive all the way from
                brainstorming stage to implementing on browsers is something I
                can not say no to!
              </p>
              <p>
                Checkout my skills and a few of my favorite projects below and
                connect if you like to.
              </p>
            </BrowserView>
            <MobileView>
              <p>
                A recent graduate of General Assembly full-time Software
                Engineering bootcamp who enjoys using logic and reason to find
                elegant and effective solutions to complex problems.
                <p>
                  I am motivated to learn how to leverage industry leading
                  frameworks and approaching everyday as an opportunity to
                  extend my knowledge. Shaping ideas and bringing them alive all
                  the way from brainstorming stage to implementing on browsers
                  is something I can not say no to!
                </p>
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
