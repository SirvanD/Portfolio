import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import Skill from "../Skills/Skill";

import styles from "./Card.module.scss";

const Card = ({ project }) => {
  const [flip, setFlip] = useState(false);

  return (
    <li className={styles.cardWrapper}>
      <button
        className={`${styles.card} ${flip ? styles.cardFlip : null}`}
        onMouseEnter={!isMobile ? () => setFlip(true) : null}
        onMouseLeave={!isMobile ? () => setFlip(false) : null}
        onClick={() => setFlip(!flip)}
      >
        <div className={`${styles.cardSide} ${styles.cardFront}`}>
          <img src={project.image} alt={project.title} />
          <div className={styles.details}>
            <h2 className={styles.text_lg}>{project.title}</h2>
            <p className="text--md">{project.description}</p>
          </div>
          <span className={styles.flip_note}>
            {isMobile ? "Tap" : "Hover"} Card for Details
          </span>
        </div>
        <div className={`${styles.cardSide} ${styles.cardBack}`}>
          <div className={styles.heading}>
            <h2 className="text--md font--bold">{project.role}</h2>
            <h3 className="text--md">{project.type}</h3>
          </div>
          <ul className={styles.stack}>
            <h2 className="text--sm space--sm">Tech Stack</h2>
            {project.stack.map((skill, index) => (
              <Skill icon={skill.icon} title={skill.title} key={index} />
            ))}
          </ul>
          {project.buttons && (
            <div className={styles.buttons}>
              {project.buttons.map((button, index) => (
                <a
                  className="button"
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  onFocus={() => setFlip(true)}
                >
                  <span className={styles.text_sm}>{button.text}</span>

                  {button.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </button>
    </li>
  );
};

export default Card;
