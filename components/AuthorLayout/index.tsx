import { Header } from "../Header";

export default function AuthorLayout() {
  /*
    <p className="mt-8">
        <a
        className="!font-normal !text-black !no-underline dark:!text-white"
        href={resume}
        target="_blank"
        rel="noreferrer"
        >
            
        <RoughNotation
            show
            type="box"
            animationDelay={250}
            animationDuration={2000}
            strokeWidth={2}
            color={"yellow"}
        >
            Resume
        </RoughNotation>
        
        </a>
    </p>
    */

  return (
    <div className="fade-in divide-y-2 divide-gray-100 dark:divide-gray-800">
      <Header title="About" />
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center space-x-2 pt-8">
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Carlos Contreras
          </h3>
          <div className="font-medium text-gray-500 dark:text-gray-400">
            Software Engineer
          </div>
        </div>

        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          I created this website to learn and test new frameworks and libraries.{" "}
          <br />
          You can find other projects I'm working on in the projects section.
        </div>
      </div>
    </div>
  );
}
