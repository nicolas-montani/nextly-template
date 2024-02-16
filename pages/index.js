import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Campaign Website</title>
        <meta
          name="description"
          content="simple landing page for the shsg campaign"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar /> 
      <Video />
      <Benefits data={benefitOne} />
      <Benefits data={benefitTwo} />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;