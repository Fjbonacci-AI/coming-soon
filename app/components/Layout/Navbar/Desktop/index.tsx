import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

const DesktopNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>
        <Image
          src={"/logo/light/fjbonaccie_logo_landscape_light_theme.png"}
          alt={"Logo"}
          className={styles.logo}
          width={1206}
          height={378}
        />
      </Link>
      <ul className={styles.navLinks}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/#customers"}>Customers</Link>
        </li>
        <li>
          <Link href={"/#projects"}>Scribe</Link>
        </li>
        <li>
          <Link href={"/#testimonials"}>Testimonials</Link>
        </li>
        <li>
          <Link href={"/careers"}>Careers</Link>
        </li>
      </ul>

      <Link href={"/contact"} className="ctaBtn">
        <span>Contact Us</span>
      </Link>
    </nav>
  );
};

export default DesktopNavbar;
