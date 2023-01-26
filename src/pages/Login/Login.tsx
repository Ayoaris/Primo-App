import React, { FC } from "react";
import { BrowserRouter as Link } from "react-router-dom"
import Button from "../../components/button/button";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Login.module.scss";

const Login: FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.login}>
        <h3>Sign In</h3>
        <form className={styles.form}>
          <div>
            <label className={styles.label}>E-mail Address </label>
            <br />
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="you@address.com"
              required
            />

            <label className={styles.label}>Password </label>
            <br />
            <input
              className={styles.input}
              type="password"
              name="pass"
              placeholder="Password"
              required
            />
          </div>
                <div className={styles.button_container}>
                    <Button
                    border="none"
                    backgroundColor="#CC0201"
                    borderRadius="50px"
                    color="#D8D8D8"
                    height="58px"
                    onClick={() => console.log("You clicked on the login!")}
                    width="330px"
                    children="Sign in"
                    />
                 {/* <p> New customer? Register <Link to ="/register" >here</ Link>.</p> */}
                </div>
        </form>
      </div>
    </>
  );
};

export default Login;
