import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.svg";
import Button from "../button/button";

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.navbar_links}>
        {/* <Link to={"jfjfj"}>login</Link> */}
        {/* <Link to="/login">Login</Link> */}
        <Button
          border="none"
          backgroundColor="#CC0201"
          borderRadius="50px"
          color="#D8D8D8"
          height="47px"
          onClick={() => console.log("You clicked on the login!")}
          width="198px"
          children="Schedule a pick up"

        />
      </div>
      {/* <div></div> */}
    </div>
  );
};

export default Navbar;
