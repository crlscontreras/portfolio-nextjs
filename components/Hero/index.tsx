import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const Hero = () => {
  /*
  Hero section:
  The first thing people see when they visit your website,
  a hero section is the area that immediately shows up on the screen under your logo and Menu/NavBar
  */
  return (
    <section className="mt-48">
      <h1 className="text-7xl font-bold">
        {"Hi, I'm "} <span className="dark:text-purple-600">Carlos</span>
      </h1>
      <h3 className="text-4xl my-3">Software Engineer</h3>
      <div className="text-xl text-gray-700 mb-8">
        <p className="font-light lg:text-xl dark:text-white">
          Read more
          <Link className="ml-2 mr-2 font-normal text-black" href="/about">
            <RoughNotation
              show
              type="highlight"
              animationDelay={250}
              animationDuration={2000}
              color={"#F5E1FF"}
            >
              about me
            </RoughNotation>
          </Link>
          or see my other
          <Link className="ml-2 font-normal text-black" href="/projects">
            <RoughNotation
              show
              type="highlight"
              animationDelay={250}
              animationDuration={2000}
              color={"#CAF0F8"}
            >
              projects
            </RoughNotation>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Hero;
