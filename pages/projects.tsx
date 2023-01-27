import Card from "@/components/Card";
import { Header } from "@/components/Header";
import { projects } from "@/config/projects";

export default function Projects() {
  return (
    <div className="fade-in divide-y-2 divide-gray-100 dark:divide-gray-800">
      <Header title="Projects" />
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projects.map(({ gitUrl, title, description, banner }) => (
            <Card
              key={gitUrl}
              title={title}
              description={description}
              banner={banner}
              href={gitUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
