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
import MBenefits from "../components/benefits2";
import ImageGallery from "../components/imagegallery";

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
      <Hero />
      <MBenefits data={benefitTwo} />
      <SectionTitle title="WHAT WE STAND FOR" >
      </SectionTitle>
      <ImageGallery/>
      <SectionTitle>
      Together, these values form the foundation of our campaign, inspiring us to make a meaningful difference in the lives of HSG students.
      </SectionTitle>
      
      <Cta />
      <Footer />
    </>
  );
}

export default Home;