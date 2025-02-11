import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/home/hero-background.png')" }}
      className={styles.mainDiv}
    >
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.heroLeft}>
          <div className={styles.textWrapper}>
            <h1>
              Your Business <br />
              Our <span className={styles.highlightText}>Digital Strategy</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium consequatur cum commodi molestias laudantium quas
              aspernatur illum, accusamus modi temporibus? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Amet similique corrupti natus
              laboriosam obcaecati hic expedita praesentium odit repudiandae
              repellat.
            </p>
          </div>
          <Link href={""} className="ctaBtn">
            <span>Projects</span>
            <GoArrowUpRight className="ctaArrow" />
          </Link>
        </div>
        <Image
          src={"/images/home/hero-image.png"}
          alt={"Hero"}
          className={styles.heroImage}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HeroSection;
