import Button from "../Button";

const Hero = () => {
  /*
  Hero section:
  The first thing people see when they visit your website,
  a hero section is the area that immediately shows up on the screen under your logo and Menu/NavBar
  */
  return (
    <section className="mt-48">
      <h1 className="text-7xl font-bold">
        Hi, I'm <span className="dark:text-purple-600">Carlosasdasd!</span>
      </h1>
      <h3 className="text-4xl my-3">Software Engineer</h3>
      <div className="text-xl text-gray-700 mb-8">
        Read more about me or contact me
      </div>
    </section>
  );
};

export default Hero;
