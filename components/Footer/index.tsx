const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()}
      <span className="dark:text-gray-100 text-gray-900 text-sm ml-1 ">
        Carlos Contreras
      </span>
    </footer>
  );
};

export default Footer;
