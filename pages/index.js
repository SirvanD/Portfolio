import Head from "next/head";

import About from "../components/About/About";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sirvan Doukchi Portfolio</title>
        <meta
          name="Sirvan Doukchi Portfolio -Full Stack Software Engineer"
          content="Hi!, I am Sirvan Doukchi, a Full-Stack developer based in Sydney,Australia and this is my Portfolio, check out my projects to see what I've been up to."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <About />
      <Skills />
      <Cards />
      <Footer />
      {/* <Connect /> */}
    </div>
  );
}
