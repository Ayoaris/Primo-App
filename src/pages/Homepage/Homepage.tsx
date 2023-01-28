import React, { FC } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from "./Homepage.module.scss"
import Button from "../../components/button/button";
const Homepage: FC = ()=> {
  return (
    <div className={styles.Container}>
      <Navbar />
      <Button />
      <div className={styles.Hero}>
        <h1>Your Reliable Doorstep Delivery.</h1>
        <p>Quick, Reliable And Affordable With Realtime Tracking</p>

        <div className={styles.Hero_btn}></div>
      </div>
    </div>
  );
}

export default Homepage
