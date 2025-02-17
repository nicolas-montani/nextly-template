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
        <title>Vote for Lisa & Nicolas</title>
        <meta
          name="description"
          content="Let's make a difference together. Vote for Lisa & Nicolas for SHSG Presidency."
        />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-QW373CQCVP"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'G-QW373CQCVP');
            `
          }}
        />
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