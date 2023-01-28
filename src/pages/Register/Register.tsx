import React, { FC } from "react";
import {Link} from "react-router-dom";
import Button from "../../components/button/button";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Register.module.scss";

const Register: FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.Register}>
        <h3>Register an account on Primo</h3>

        <form className={styles.form}>
          <div className={styles.double}>
            <div className={styles.input_D}>
              <label className={styles.label}>First name</label>
              <br />
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="First name"
                required
              />
            </div>
            <div className={styles.input_D}>
              <label className={styles.label}>Last name</label>
              <br />
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className={styles.input_D}>
            <label className={styles.label}>Phone Number</label>
            <br />
            <input
              className={styles.input_A}
              type="text"
              name="Phone Number"
              placeholder="08100000500"
              required
            />
          </div>
          <div className={styles.input_D}>
            <label className={styles.label}>E-mail Address </label>
            <br />
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="you@address.com"
              required
            />
          </div>
          <div className={styles.double}>
            <div className={styles.input_D}>
              <label className={styles.label}>Password</label>
              <br />
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Password"
                required
              />
            </div>
            <div className={styles.input_D}>
              <br />
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Enter Password again"
                required
              />
            </div>
          </div>
          <div className={styles.btn_section}>
            <div className={styles.btn_wrapper}>
              <Button
                border="none"
                backgroundColor="#CC0201"
                borderRadius="none"
                color="#D8D8D8"
                height="58px"
                onClick={() => console.log("You clicked on the login!")}
                width={"100%"}
                fontSize="15px"
                children="continue"
              />
            </div>
            <p>
              Are you an existing customer? Login
              <Link to="/login"> here.</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
