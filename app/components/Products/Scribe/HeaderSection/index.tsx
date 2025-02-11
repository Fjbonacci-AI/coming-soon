import React from "react";
import styles from "./index.module.css";

const HeaderSection = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/home/hero-background.png')" }}
      className={styles.mainDiv}
    >
      <div className="boxWrapper">
        <div
          className={styles.contentWrapper}
          style={{ backgroundImage: "url('/images/home/hero-image.png')" }}
        >
          <h1>
            Introducing <br />
            <span className={styles.highlight}>Scribe</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
