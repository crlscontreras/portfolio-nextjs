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
    banner: "/static/images/webBanner.PNG",
    website: "https://github.com/crlscontreras/portfolio-nextjs",
    description:
      "The webapp you are seeing right now! You can visit the repository to learn more about it.",
  },
];
