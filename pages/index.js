import Head from "next/head";
import Image from "next/image";
import Connect from "../components/Connect/Connect";

import About from "../components/About/About";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Skills from "../components/Skills/Skills";

import styles from "../styles/Home.module.scss";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap"
          rel="stylesheet"
        />
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
