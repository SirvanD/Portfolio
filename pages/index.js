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
    <div className={styles.container}>
      <Head>
        <title>Sirvan Doukchi Portfolio</title>
        <meta
          name="Full Stack Software Engineer"
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
