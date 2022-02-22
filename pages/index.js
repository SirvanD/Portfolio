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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FZT1RM9HE8"></script>
         <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FZT1RM9HE8');
          </script>
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
