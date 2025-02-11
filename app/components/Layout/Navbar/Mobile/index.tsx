"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.mainDiv}>
      <div className={styles.topNav}>
        <Link href={"/"}>
          <Image
            src={"/logo/light/fjbonaccie_logo_landscape_light_theme.png"}
            alt={"Logo"}
            className={styles.logo}
            width={1206}
            height={378}
          />
        </Link>
        <button
          type="button"
          className={styles.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoClose className={!menuOpen ? styles.hidden : ""} />
          <HiMenuAlt3 className={menuOpen ? styles.hidden : ""} />
        </button>
      </div>

      <nav className={`${styles.navbar} ${menuOpen ? styles.menuOpen : ""}`}>
        <ul className={styles.navLinks}>
          <li>
            <Link href={"/"}>
              <GoChevronRight />
              Home
            </Link>
          </li>
          <li>
            <Link href={"/#customers"}>
              <GoChevronRight />
              Customers
            </Link>
          </li>
          <li>
            <Link href={"/#projects"}>
              <GoChevronRight />
              Projects
            </Link>
          </li>
          <li>
            <Link href={"/#testimonials"}>
              <GoChevronRight />
              Testimonials
            </Link>
          </li>
          <li>
            <Link href={"/careers"}>
              <GoChevronRight />
              Careers
            </Link>
          </li>
        </ul>

        <div className={styles.socialLinksWrapper}>
          <span>Follow Us</span>
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
      </nav>
    </div>
  );
};

export default MobileNavbar;
