import React, { FC } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from "./Homepage.module.scss"
const Homepage: FC = ()=> {
  return (
      <div className={styles.Container}>
          <Navbar/>
      <div className={styles.Hero}>
        <h1>Your Reliable Doortep</h1>
      </div>
    </div>
  )
}

export default Homepage
