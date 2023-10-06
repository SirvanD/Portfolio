import style from './About.module.scss'
import ReactTyped from 'react-typed'
import { socialData } from '../../public/social'
import Social from '../Social/Social'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect'
import React, { useEffect, useState } from 'react'
const images = ['./images/image.svg', './images/image2.svg']
function About() {
  const [currentImage, setCurrentImage] = useState('./images/image.svg')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)])
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

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
            <h2>
              Hi, I&apos;m Sirvan,{' '}
              <ReactTyped
                strings={[
                  'a developer',
                  'a footballer',
                  'an adventurer',
                  'a friend',
                  'a colleague',
                  'a partner',
                  'a listener',
                ]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar=" _"
                showCursor={true}
                style={{
                  fontSize: '2.2rem',
                  fontFamily: 'Sen',
                }}
              />
            </h2>
          </div>

          <div className={style.about_subtitle}>
            <h3>Full Stack Developer based in Sydney</h3>
          </div>
          <div className={style.about_content}>
            <BrowserView>
              <p className={style.about_content}>
                Currently working as a Software Engineer at Vodafone Australia.
                <br /> <br />A graduate of General Assembly full-time Software
                Engineering Bootcamp who enjoys using logic to find
                user-friendly and effective solutions to complex problems.
              </p>
              <p className={style.about_content}>
                I am curious and motivated to learn how to leverage industry
                leading frameworks and approaching everyday as an opportunity to
                extend my knowledge. Shaping ideas, strong attention to details
                and bringing them alive all the way from brainstorming stage to
                implementing on browsers is something I can not say no to!
              </p>
              <p className={style.about_content}>
                I am also a footballer and very fond of my meticulously picked
                podcast shows!
              </p>
              <p className={style.about_content}>
                Checkout my skills and a few of my favorite projects below and
                connect if you like to.
              </p>
            </BrowserView>
            <MobileView>
              <p className={style.about_content}>
                Currently working as a Software Engineer at Vodafone Australia.
                <br /> <br />A graduate of General Assembly full-time Software
                Engineering Bootcamp who enjoys using logic to find
                user-friendly and effective solutions to complex problems.
                <p className={style.about_content}>
                  As a developer, I am curious with strong attention to details
                  and motivated to learn how to leverage industry leading
                  frameworks and approaching everyday as an opportunity to
                  extend my knowledge.
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
              classNames={[social.className, 'socialAccent']}
              icon={social.icon}
              aValues={social.aValues}
              key={index}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
