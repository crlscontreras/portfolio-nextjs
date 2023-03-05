export interface Project {
  title: string;
  gitUrl: string;
  banner: string;
  website: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio",
    gitUrl: "https://github.com/crlscontreras/portfolio-nextjs",
    banner: "/static/images/portfolio.PNG",
    website: "https://github.com/crlscontreras/portfolio-nextjs",
    description:
      "The webapp you are seeing right now! You can visit the repository to learn more about it.",
  },
  {
    title: "SpringBoot REST API",
    gitUrl: "https://github.com/crlscontreras/SpringApiRestTest",
    banner: "/static/images/apiRest.PNG",
    website: "https://github.com/crlscontreras/SpringApiRestTest",
    description:
      "REST API developed with Spring Boot, with unit tests made with JUnit5. Connected to a MongoDB Atlas database, which contains information from different movies and TV shows",
  },
  {
    title: "Capstone Project ",
    gitUrl: "https://github.com/crlscontreras/SpringApiRestTest",
    banner: "/static/images/capstone.PNG",
    website: "https://github.com/crlscontreras/SpringApiRestTest",
    description:
      "The final year assignment to obtain my college degree, in which I worked with the Chilean Health Service to design and build a web application.",
  },
];
