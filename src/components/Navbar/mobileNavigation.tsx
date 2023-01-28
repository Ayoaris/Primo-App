import React, { FC } from "react";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Navbar.module.scss";
import { HiMenuAlt2 } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation: FC = () => {
  const [open, setopen] = useState(false);

  const hamburgerIcon = (
    <HiMenuAlt2
      className={styles.hamburger}
      size="40px"
      color="#283646"
      onClick={() => setopen(!open)}
    />
  );
  const closehamburgerIcon = (
    <CgCloseO
      className={styles.hamburger}
      size="40px"
      color="#283646"
      onClick={() => setopen(!open)}
    />
  );
  return (
    <>
      <div className={styles.mobileNavigation}>
        <div className={styles.navbar_logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className={styles.mobileNavigation}>
          {open ? closehamburgerIcon : hamburgerIcon}
          {open && <Navlinks />}
        </nav>
      </div>
    </>
  );
};

export default MobileNavigation;
