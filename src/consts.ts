import type { Metadata, Site, Socials } from "@types";

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const baseUrl = "https://simeonat.github.io";

export const SITE: Site = {
  TITLE: "Simeon Tran",
  DESCRIPTION: "Computer Science Graduate Student",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My personal website and blog.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "Blog posts on research and programming projects that I am currently working on.",
};

export const PERSONAL: Metadata = {
  TITLE: "Personal",
  DESCRIPTION:
    "Where I discuss my hobbies and other non-technical topics.",
};

export const RESEARCH: Metadata = {
  TITLE: "Research",
  DESCRIPTION:
    "Research projects I have worked on.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/simeonat",
    icon: faGithub,
    end: false,
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/simeon-tran/",
    icon: faLinkedin,
    end: true,
  }
];
