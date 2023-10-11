import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Contact,
  Error404,
  Footer,
  Home,
  Navbar,
  Projects,
} from "./components";
import styles from "./style";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-primary">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
