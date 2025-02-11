import React from "react";
import MobileNavbar from "./Mobile";
import DesktopNavbar from "./Desktop";
import styles from "./index.module.css";

const NavbarLayout = () => {
  return (
    <>
      <div className={styles.mobileNavbar}>
        <MobileNavbar />
      </div>
      <div className={styles.desktopNavbar}>
        <DesktopNavbar />
      </div>
    </>
  );
};

export default NavbarLayout;
