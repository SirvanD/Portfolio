import React from "react";
import { GithubIcon, GmailIcon, LinkedinIcon } from "./../public/icons";

export const socialData = [
  {
    icon: <GithubIcon />,
    aValues: {
      href: "https://github.com/benlammers",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    className: "socialGithub",
  },
  {
    icon: <GmailIcon />,
    aValues: {
      href: "mailto:21benlammers@gmail.com",
    },
    className: "socialGmail",
  },
  {
    icon: <LinkedinIcon />,
    aValues: {
      href: "https://www.linkedin.com/in/ben-lammers-3bb8bb168/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    className: "socialLinkedin",
  },
];
