import react from "react";
import React from "react";
import { ExternalIcon, GithubIcon } from "../../public/icons.js";

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
  git: { icon: "../../icons/git.svg", title: "Git" },
  jira: { icon: "../../icons/jira.svg", title: "Jira" },
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
  jest: { icon: "../../icons/jest2.png", title: "Jest" },
  react_native: {
    icon: "../../icons/react-native.png",
    title: "React Native",
  },
};

export const projectsData = [
  {
    title: "MyTaxi",
    description: `A simple objective oriented application where using a tricky and inconsistent API endpoint, it repeats the API call until getting a response and returns the rates for popular star wars titles at the best value highlighted. Unit tested and API call mocked`,
    image: "../../projects/PTSS.svg",
    role: "Frontend Application",
    type: "Personal Project",
    stack: [skills.react, skills.js, skills.sass, skills.css, skills.jest],
    buttons: [
      {
        text: "View Project Repo",
        link: "https://github.com/SirvanD/Princes-Theatre",
        icon: <GithubIcon />,
      },
      {
        text: "View Live Demo",
        link: "https://princes-theatre-zeta.vercel.app/",
        icon: <ExternalIcon />,
      },
    ],
  },

  {
    title: "Prince's Theatre",
    description: `A simple objective oriented application where using a tricky and inconsistent API endpoint, it repeats the API call until getting a response and returns the rates for popular star wars titles at the best value highlighted. Unit tested and API call mocked`,
    image: "../../projects/PTSS.svg",
    role: "Frontend Application",
    type: "Personal Project",
    stack: [skills.react, skills.js, skills.sass, skills.css, skills.jest],
    buttons: [
      {
        text: "View Project Repo",
        link: "https://github.com/SirvanD/Princes-Theatre",
        icon: <GithubIcon />,
      },
      {
        text: "View Live Demo",
        link: "https://princes-theatre-zeta.vercel.app/",
        icon: <ExternalIcon />,
      },
    ],
  },
  {
    title: "Portfolio",
    description: `My personal portfolio used to showcase my experience and achievements as a 
      web developer. Created with a focus on mobile first design and leveraging modern CSS. Try it on your phone now!`,
    image: "../../projects/portfolio.svg",
    role: "Frontend Application",
    type: "Personal Project",
    stack: [skills.react, skills.js, skills.nextjs, skills.sass, skills.css],
    buttons: [
      {
        text: "View Project Repo",
        link: "https://github.com/SirvanD/Portfolio",
        icon: <GithubIcon />,
      },
    ],
  },
  {
    title: "BookShelf",
    description: `A community library where users can safely signup with email or Google account with firebase authentication in place, donate their once loved books to the community, this MERN stack Application is using Google Books API to retrieve Books data.`,
    image: "../../projects/bookshelf.jpg",
    role: "Full Stack Application",

    stack: [
      skills.react,
      skills.node,
      skills.mongo,
      skills.firebase,
      skills.mui,
      skills.rest,
    ],
    buttons: [
      {
        text: "View Frontend Repo",
        link: "https://github.com/SirvanD/Bookshelf-Client",
        icon: <GithubIcon />,
      },
      {
        text: "View API Repo",
        link: "https://github.com/SirvanD/BookShelf-Server",
        icon: <GithubIcon />,
      },
      {
        text: "View Live Demo",
        link: "https://bookshelf-client-six.vercel.app/",
        icon: <ExternalIcon />,
      },
    ],
  },

  {
    title: "Servo API",
    description: `Utilising publicly accessible government data, this API marks the location of all petrol stations across Australia. Google Maps API is used to sort and show the number of stations, and user's location and address on the map.`,
    image: "../../projects/servo.jpg",
    role: "Full Stack Application",
    type: "",
    stack: [
      skills.js,
      skills.node,
      skills.pg,
      skills.bootstrap,
      skills.heroku,
      skills.rest,
    ],
    buttons: [
      {
        text: "View API Repo",
        link: "https://github.com/SirvanD/Servo_App",
        icon: <GithubIcon />,
      },
      {
        text: "View Live Demo",
        link: "https://servo-app-heroku.herokuapp.com/",
        icon: <ExternalIcon />,
      },
    ],
  },
  {
    title: "Space Watch",
    description: `A twitter inspired portal for astronomy enthusiasts to signup, login , create and edit profile and share, caption, like and unlike images. NASA API has been used for image of the day section.`,
    image: "../../projects/space.jpg",
    role: "Back End Application",
    type: "",
    stack: [skills.ruby, skills.pg, skills.rest, skills.mui, skills.heroku],
    buttons: [
      {
        text: "View API Repo",
        link: "https://github.com/SirvanD/Space_Watch",
        icon: <GithubIcon />,
      },
      {
        text: "View Live Demo",
        link: "https://space-watch.herokuapp.com/",
        icon: <ExternalIcon />,
      },
    ],
  },
  {
    title: "Tic Tac Toe",
    description: `Good old Tic Tac Toe has made a come back with a simple and user-friendly interface. My first project with vanilla JavaScript, html and CSS.`,
    image: "../../projects/game.jpg",
    role: "Front End Application",
    type: "",
    stack: [skills.html, skills.js, skills.css],
    buttons: [
      {
        text: "View Project Repo",
        link: "https://github.com/SirvanD/Project-The-Game",
        icon: <GithubIcon />,
      },
      {
        text: "View Live Demo",
        link: "https://sirvand.github.io/Project-The-Game/",
        icon: <ExternalIcon />,
      },
    ],
  },
];
