import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.logoWrapper}>
          <Image
            src={"/logo/dark/fjbonaccie_logo_landscape_dark_theme.png"}
            alt={"Logo"}
            className={styles.logo}
            width={1206}
            height={378}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            error!
          </p>
        </div>

        <div className={styles.footerItemWrapper}>
          <h4>Quick Access</h4>
          <ul className={styles.links}>
            <li>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>Scribe</Link>
            </li>
            <li>
              <Link href={""}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={""}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerItemWrapper}>
          <h4>Contact Us</h4>
          <ul className={styles.contactDetails}>
            <li>
              <h6>Email</h6>
              <span>johndoe2gmail.com</span>
            </li>
            <li>
              <h6>Phone</h6>
              <span>+123 456 7890</span>
              <span>+123 456 7890</span>
            </li>
          </ul>
        </div>

        <div className={styles.footerItemWrapper}>
          <h4>Follow Us</h4>
          <ul className={styles.socialLinks}>
            <li>
              <Link href={""}>
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <FaGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
