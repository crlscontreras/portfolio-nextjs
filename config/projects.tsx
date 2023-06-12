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
    banner: "/static/images/portfolio.png",
    website: "https://github.com/crlscontreras/portfolio-nextjs",
    description:
      "The webapp you are seeing right now! You can visit the repository to learn more about it.",
  },
  {
    title: "SpringBoot REST API",
    gitUrl: "https://github.com/crlscontreras/SpringApiRestTest",
    banner: "/static/images/apiRest.png",
    website: "https://github.com/crlscontreras/SpringApiRestTest",
    description:
      "REST API developed with Spring Boot, with unit tests made with JUnit5. Connected to a MongoDB Atlas database, which contains information from different movies and TV shows",
  },
  {
    title: "Capstone Project ",
    gitUrl: "https://github.com/crlscontreras/sistema-comges",
    banner: "/static/images/capstone.png",
    website: "https://github.com/crlscontreras/sistema-comges",
    description:
      "The final year assignment to obtain my college degree, in which I worked with the Chilean Health Service to design and build a web application.",
  },
  {
    title: "Task Tracker",
    gitUrl: "https://github.com/crlscontreras/angular-task-tracker",
    banner: "/static/images/taskTracker.png",
    website: "https://github.com/crlscontreras/angular-task-tracker",
    description: "A minimalist task tracking tool made with Angular.",
  },
  {
    title: "Server Managment Application - Angular Frontend",
    gitUrl: "https://github.com/crlscontreras/server-frontend",
    banner: "/static/images/serverFront.PNG",
    website: "https://github.com/crlscontreras/server-frontend",
    description:
      "Angular frontend of the web application to manage servers (with ping capability) and users (Register/Login module).",
  },
  {
    title: "Server Managment Application - Springboot Backend",
    gitUrl: "https://github.com/crlscontreras/server-backend",
    banner: "/static/images/serverBack.png",
    website: "https://github.com/crlscontreras/server-backend",
    description:
      "Springboot backend of the web application to manage servers and users. This project demonstrates the implementation of a user authentication and authorization module using JWT and Spring Security. It includes a refresh token mechanism.",
  },
];
