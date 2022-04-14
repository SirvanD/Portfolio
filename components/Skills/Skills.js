import Skill from "./Skill";
import style from "./Skills.module.scss";

function Skills() {
  const skills = {
    html: { icon: "../../icons/html.svg", title: "HTML" },
    css: { icon: "../../icons/css3.svg", title: "CSS 3" },
    js: { icon: "../../icons/js.svg", title: "JavaScript" },
    ruby: { icon: "../../icons/ruby.svg", title: "Ruby" },
    react: { icon: "../../icons/react.svg", title: "React" },
    node: { icon: "../../icons/nodejs.svg", title: "NodeJS" },
    nextjs: { icon: "../../icons/nextjs.svg", title: "NextJS" },
    mui: { icon: "../../icons/mui.svg", title: "MaterialUI" },
    bootstrap: { icon: "../../icons/bootstrap.svg", title: "Bootstrap" },
    mongo: { icon: "../../icons/mongodb.svg", title: "MongoDB" },
    pg: { icon: "../../icons/pg.svg", title: "PostgreSQL" },
    firebase: { icon: "../../icons/firebase.svg", title: "Firebase" },
    aws: { icon: "../../icons/aws.svg", title: "AWS" },
    git: { icon: "../../icons/git.svg", title: "Git Flow" },
    jira: { icon: "../../icons/jira.svg", title: "Jira Workflow" },
    azure: { icon: "../../icons/azure.svg", title: "MS Azure" },
    ts: { icon: "../../icons/typescript.svg", title: "TypeScript" },
    tailwind: { icon: "../../icons/tailwind.png", title: "Tailwind CSS" },
    redux: { icon: "../../icons/redux.svg", title: "Redux" },
    sass: { icon: "../../icons/sass.svg", title: "SASS" },
    vue: { icon: "../../icons/vue.svg", title: "Vue JS" },
    stripe: { icon: "../../icons/stripe.svg", title: "Stripe" },
    graphql: { icon: "../../icons/graphql.svg", title: "GraphQL" },
    prisma: { icon: "../../icons/prisma.png", title: "Prisma" },
    heroku: { icon: "../../icons/heroku.svg", title: "Heroku" },
    rest: { icon: "../../icons/rest.png", title: "REST API" },
    jest: { icon: "../../icons/jest.svg", title: "Jest" },
  };
  return (
    <section className={style.container} id="skills">
      <div className="heading">
        <h1 className="text--xl font--heading font--bold space--xl">
          Skill Set
        </h1>
        <p className="text--md font--heading">
          Throughout my journey, I have had the opportunity to learn and work
          with a variety of languages, frameworks, and libraries.
        </p>
      </div>
      <ul className={style.list}>
        <p className={style.skills_using_header}>
          <p className="text--md font--heading">
            I am using now and have experience with
          </p>
        </p>

        <ul className={style.skillList}>
          <Skill icon={skills.html.icon} title={skills.html.title} />
          <Skill icon={skills.css.icon} title={skills.css.title} />
          <Skill icon={skills.js.icon} title={skills.js.title} />
          <Skill icon={skills.ruby.icon} title={skills.ruby.title} />
          <Skill icon={skills.react.icon} title={skills.react.title} />
          <Skill icon={skills.node.icon} title={skills.node.title} />
          <Skill icon={skills.nextjs.icon} title={skills.nextjs.title} />
          <Skill icon={skills.sass.icon} title={skills.sass.title} />
          <Skill icon={skills.mui.icon} title={skills.mui.title} />
          <Skill icon={skills.bootstrap.icon} title={skills.bootstrap.title} />
          <Skill icon={skills.mongo.icon} title={skills.mongo.title} />
          <Skill icon={skills.pg.icon} title={skills.pg.title} />
          <Skill icon={skills.firebase.icon} title={skills.firebase.title} />
          <Skill icon={skills.heroku.icon} title={skills.heroku.title} />
          <Skill icon={skills.rest.icon} title={skills.rest.title} />
          <Skill icon={skills.git.icon} title={skills.git.title} />
          <Skill icon={skills.jira.icon} title={skills.jira.title} />
          <Skill icon={skills.aws.icon} title={skills.aws.title} />
          <Skill icon={skills.jest.icon} title={skills.jest.title} />
        </ul>
      </ul>
      <ul className={style.list}>
        <p className={style.skills_learning_header}>
          <p className="text--md font--heading">
            I am exploring, learning and experimenting with
          </p>
        </p>
        <ul className={style.skillList}>
          <Skill icon={skills.ts.icon} title={skills.ts.title} />
          <Skill icon={skills.vue.icon} title={skills.vue.title} />
          <Skill icon={skills.redux.icon} title={skills.redux.title} />
          <Skill icon={skills.tailwind.icon} title={skills.tailwind.title} />
          <Skill icon={skills.stripe.icon} title={skills.stripe.title} />
          <Skill icon={skills.graphql.icon} title={skills.graphql.title} />
          <Skill icon={skills.prisma.icon} title={skills.prisma.title} />
        </ul>
      </ul>
    </section>
  );
}

export default Skills;
