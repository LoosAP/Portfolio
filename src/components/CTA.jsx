import React from "react";
import styles from "../style";
import Button from "./Button";
const CTA = () => {
  return (
    <section
      id="CTA"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex flex-col flex-1">
        <h2 className={styles.heading2}>Try our service now!</h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          eligendi quia voluptatem ratione saepe maxime laudantium voluptas quam
          quae incidunt, nostrum perferendis officiis voluptatibus nesciunt est
          omnis facere recusandae temporibus!
        </p>
      </div>
      <div className={`${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
