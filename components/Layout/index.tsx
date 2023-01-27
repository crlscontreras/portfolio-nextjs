import Head from "next/head";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Next Tailwind Theme</title>
        <meta
          name="description"
          content="Create dark mode in next and tailwind"
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
