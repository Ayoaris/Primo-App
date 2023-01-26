import React, { FC } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from "./Homepage.module.scss"
const Homepage: FC = ()=> {
  return (
      <div className={styles.Container}>
          <Navbar/>
      <p>HomePages layout</p>
    </div>
  )
}

export default Homepage
