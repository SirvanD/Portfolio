import React from "react";
import styles from "./Cards.module.scss";
import { projectsData } from "./projects";
import Card from "./Card";
function Cards() {
  return (
    <section className="section" id="projects">
      <div className="heading">
        <h1 className="text--xl font--heading font--bold">Projects</h1>
        <p className="text--md font--heading">
          I constantly endeavour to use new techs in every project to learn a
          new skill along the way while completing them.
        </p>
      </div>
      <ul className={styles.list}>
        {projectsData.map((project, index) => (
          <Card project={project} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default Cards;
