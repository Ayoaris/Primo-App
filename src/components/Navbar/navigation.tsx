import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import styles from "./Navbar.module.scss";
import Button from '../button/button';



const Navigation:FC=()=> {
    return (
      <div className={styles.Desktop}>
        <nav className={styles.navbar}>
          <div className={styles.navbar_logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.navbar_links}>
            <div>
              <p>Login</p>
            </div>
            <div>
              <Button
                border="none"
                backgroundColor="#CC0201"
                borderRadius="50px"
                color="#D8D8D8"
                height="47px"
                onClick={() => console.log("You clicked on the login!")}
                width="190px"
                fontSize="20px"
                children="Schedule a pick up"
              />
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navigation