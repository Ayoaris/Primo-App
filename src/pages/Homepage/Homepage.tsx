import React, { FC } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from "./Homepage.module.scss"
import Button from "../../components/button/button";

const Homepage: FC = ()=> {
  return (
    <div className={styles.Container}>
      <Navbar />

      <div className={styles.Hero}>
        <div className={styles.hero_writeup}>
          <h1>
            Your Reliable <span>Doorstep Delivery.</span>
          </h1>
          <p>
            Quick, Reliable And Affordable <span>With Realtime Tracking</span>
          </p>
          <div className={styles.Hero_btn}>
            <Button
              border="none"
              backgroundColor="#CC0201"
              borderRadius="50px"
              color="#D8D8D8"
              height="58px"
              onClick={() => console.log("You clicked on the login!")}
              width="360px"
              fontSize="15px"
              margin="1rem 0"
              children="Schedule a pickup"
            />
            <Button
              border="#cc0201 1px solid"
              backgroundColor="#fff"
              borderRadius="50px"
              color="#cc0201"
              height="58px"
              onClick={() => console.log("You clicked on the login!")}
              width="360px"
              fontSize="15px"
              children="Tack a package"
            />
          </div>
        </div>
        <div className={styles.img}>
          <img
            src="https://media.istockphoto.com/id/1177117400/photo/coworkers-rushing-to-load-packages-in-a-delivery-van.jpg?s=612x612&w=0&k=20&c=8krDiH4YSGF-koks39RregS_bt_vEutsdPsUbWFQQ7k="
            alt="hero/delivery"
            width="650px"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage
