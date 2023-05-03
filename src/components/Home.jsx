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
    <>
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
        </div>
      </div>
    </>
  );
};

export default Home;
