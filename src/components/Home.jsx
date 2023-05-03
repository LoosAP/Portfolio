import React from "react";
import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "../components";
import styles from "../style";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/*
           <Stats />
          <Business />
           
          <Billing />
           
           */}
          <CardDeal />
          <Testimonials />
          <Tools />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
