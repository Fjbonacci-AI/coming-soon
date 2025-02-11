import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { GoArrowUpRight, GoPerson } from "react-icons/go";
import { IoMailOpenOutline } from "react-icons/io5";

const ContactUsSection = () => {
  return (
    <section className={styles.mainDiv}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.header}>
          <h4>Contact Us</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            odit enim consequatur quo perspiciatis animi laborum, id officiis
            nostrum debitis!
          </p>
        </div>

        <div className={styles.contactWrapper}>
          <Image
            src={"/images/team/team-1.png"}
            alt={"Contact Us"}
            className={styles.contactImage}
            width={500}
            height={500}
          />
          <form className={styles.contactForm}>
            <div className={styles.inputWrapper}>
              <span>First Name</span>
              <label>
                <GoPerson />
                <input type="text" placeholder="First Name" />
              </label>
            </div>

            <div className={styles.inputWrapper}>
              <span>Last Name</span>
              <label>
                <GoPerson />
                <input type="text" placeholder="First Name" />
              </label>
            </div>

            <div className={`${styles.colspan} ${styles.inputWrapper}`}>
              <span>Email Address</span>
              <label>
                <IoMailOpenOutline />
                <input type="text" placeholder="First Name" />
              </label>
            </div>

            <div className={`${styles.colspan} ${styles.inputWrapper}`}>
              <span>Message</span>
              <label>
                <textarea placeholder="Enter Your Message" rows={8} />
              </label>
            </div>

            <button
              type="submit"
              className={`ctaBtn ${styles.colspan} ${styles.submitBtn}`}
            >
              <span>Submit</span>
              <GoArrowUpRight className="ctaArrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
