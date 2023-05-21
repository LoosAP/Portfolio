import React from "react";
import { socialMedia } from "../consts";
import styles from "../style";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section
      className={`${styles.padding} ${styles.flexCenter}  flex-col relative`}
    >
      <div className="flex flex-wrap justify-center w-full feedback-container">
        {socialMedia.map((card) => (
          <ContactCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
