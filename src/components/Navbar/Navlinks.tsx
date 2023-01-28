import React, { FC } from 'react'
import styles from "./Navbar.module.scss";



const Navlinks :FC =()=> {
    return (
    //   {this ought to be list of links that will be displayed on the navbar} 
    <div>
            <ul className={styles.navbar_links}>
                <li>Login</li>
                </ul>
          </div>
  )
}

export default Navlinks;
