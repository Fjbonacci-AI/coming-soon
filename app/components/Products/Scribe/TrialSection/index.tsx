import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const TrialSection = () => {
  return (
    <section className="boxWrapper">
      <div className={styles.contentWrapper}>
        <h3>Give Life To Your Dreams With Our Solutions</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum odio
          temporibus a consectetur libero deleniti blanditiis commodi officiis
          autem tempore?
        </p>
        <Link href={""} className="ctaBtn">
          <span>Try for free</span>
          <GoArrowUpRight className="ctaArrow" />
        </Link>
      </div>
    </section>
  );
};

export default TrialSection;
