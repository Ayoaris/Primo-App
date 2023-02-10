import React, { FC } from "react";
import Logo from "../../assets/logo.svg";
import Button from "../button/button";
import Style from "./Footer.module.scss";
import { MdForwardToInbox } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
const Footer: FC = () => {
  return (
    <>
      <div className={Style.Main}>
        <div className={Style.News}>
          <h2>Join our newsletter</h2>
          <p> From time to time, we send out useful information and tips.</p>
          <p>Kindly subscribe to read and share.</p>
          <div className={Style.Input_style}>
            <input type="text" placeholder="Your email here" />
            <div  className={Style.Join}>
              <Button
                border="none"
                backgroundColor="#CC0201"
                borderRadius="50px"
                color="#D8D8D8"
                height="2.8rem"
                onClick={() => console.log("You clicked on the login!")}
                width={"100%"}
                fontSize="15px"
                children="Join"
                // margin="0.5rem 0rem 0.5rem 44.7rem"
              />
            </div>
          </div>
        </div>
        <div className={Style.Line}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={Style.Footer}>
          <div className={Style.colums1}>
            <p>Ikota Shopping Complex, Lekki- Lagos</p>
            <p>
              <MdForwardToInbox /> hello@primo
            </p>
            <p>
              <HiOutlinePhone />
              +2348031234567
            </p>
          </div>
          <div className={Style.colums}>
            <h2>Services</h2>
            <p>3 Hours Delivery</p>
            <p>Same Day Delivery</p>
            <p>Next Day Delivery</p>
            <p>Scheduled Delivery</p>
          </div>
          <div className={Style.colums}>
            <h2>About Us</h2>
            <p>
              We are your your reliable doorstep delivery partner Learn More.
            </p>
          </div>
          <div className={Style.colums}>
            <h2>Socials</h2>
            <p>Get social with us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
