import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import styles from "./index.module.css";

const OverviewSection = () => {
  return (
    <section className={styles.mainDiv}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <h2>
          An AI-powered tool designed to simplify, automate, and enhance
          productivity
        </h2>
        <div className={styles.overviewWrapper}>
          <div className={styles.overviewContent}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard Lorem
              Ipsum is simply dummy text of the printing and typesetting <br />{" "}
              <br />
              industry. Lorem Ipsum has been the industry&apos;s standard Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard Lorem
              Ipsum is simply dummy text of the printing and typesetting <br />{" "}
              <br />
              industry. Lorem Ipsum has been the industry&apos;s standard Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
            </p>
            <Link href={""} className="ctaBtn">
              <span>Try Demo</span>
              <GoArrowUpRight className="ctaArrow" />
            </Link>
          </div>
          <Image
            src={"/images/home/hero-image.png"}
            alt={"Overview"}
            className={styles.overviewImage}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
