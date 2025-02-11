import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import { GoArrowUpRight } from "react-icons/go";

const ScribeProductSection = () => {
  return (
    <section className={styles.mainDiv}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.header}>
          <h4>Scribe</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            odit enim consequatur quo perspiciatis animi laborum, id officiis
            nostrum debitis!
          </p>
          <Link href={"/scribe"} className="ctaBtn">
            <span>Learn More</span>
            <GoArrowUpRight className="ctaArrow" />
          </Link>
        </div>

        <div className={styles.imageGrid}>
          <Image
            src={"/images/scribe/scribe-product.png"}
            alt={"Scribe Product"}
            width={500}
            height={500}
          />
          <Image
            src={"/images/scribe/scribe-product.png"}
            alt={"Scribe Product"}
            width={500}
            height={500}
          />
          <Image
            src={"/images/scribe/scribe-product.png"}
            alt={"Scribe Product"}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default ScribeProductSection;
