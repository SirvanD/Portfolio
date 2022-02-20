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
          Reinforcing my knowledge practically by applying new skills and
          open-source frameworks to complete below projects.
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
