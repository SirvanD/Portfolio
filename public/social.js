import React from "react";
import { GithubIcon, GmailIcon, LinkedinIcon } from "./../public/icons";
//exporting social object 13
export const socialData = [
  {
    icon: <GithubIcon />,
    aValues: {
      href: "https://github.com/SirvanD",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    className: "socialGithub",
  },
  {
    icon: <GmailIcon />,
    aValues: {
      href: "mailto:sirvansh@gmail.com",
      target: "_blank",
    },
    className: "socialGmail",
  },
  {
    icon: <LinkedinIcon />,
    aValues: {
      href: "https://www.linkedin.com/in/sirvan-doukchi/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    className: "socialLinkedin",
  },
];
