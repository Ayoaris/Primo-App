import React, { FC } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Homepage.module.scss";
import Button from "../../components/button/button";
import Card from "../../components/Card/Card";
import b2b from "../../assets/b2b.svg";
import dedication from "../../assets/dedicated.svg";
import tracking from "../../assets/tracking.svg";
import reliable from "../../assets/reliable.svg";
import go from "../../assets/go.svg";
import Savetime from "../../assets/Savetime.svg";
import tackIcon from "../../assets/tackIcon.svg";
import deliveryIcon from "../../assets/deliveryIcon.svg";
import arrow from "../../assets/arrow.svg";
import Footer from "../../components/Footer/Footer";
import GooglePlay from "../../assets/GooglePlay.svg";
import AppStore from "../../assets/AppStore.svg";
import location from "../../assets/location.svg";
import Dropoff from "../../assets/Dropoff.svg";
import packageicon from "../../assets/packageicon.svg";
import confirm from "../../assets/confirm.svg";
import line from "../../assets/line.svg";
import switchbox from "../../assets/switchbox.svg";
import Slide from "../../components/Slider/Slider";





const Homepage: FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.Container}>
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
                color="#ffff"
                height="58px"
                onClick={() => console.log("You clicked on the login!")}
                width={"100%"}
                fontSize="18px"
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
                width={"100%"}
                fontSize="18px"
                children="Tack a package"
              />
            </div>
          </div>
          <div className={styles.img}>
            <img
              src="https://media.istockphoto.com/id/1177117400/photo/coworkers-rushing-to-load-packages-in-a-delivery-van.jpg?s=612x612&w=0&k=20&c=8krDiH4YSGF-koks39RregS_bt_vEutsdPsUbWFQQ7k="
              alt="hero/delivery"
              width="670px"
              height="600px"
            />
          </div>
        </div>
        <div className={styles.Icons}>
          <div className={styles.icon}>
            <img src={tracking} alt="tracking" />
            <p>Realtime Tracking</p>
          </div>
          <div className={styles.icon}>
            <img src={go} alt="go" />
            <p>Book on the Go</p>
          </div>
          <div className={styles.icon}>
            <img src={reliable} alt="reliable" />
            <p>Reliable Team</p>
          </div>
          <div className={styles.icon}>
            <img src={dedication} alt="dedication" />
            <p>Dedicated Support</p>
          </div>
          <div className={styles.icon}>
            <img src={b2b} alt="b2b" />
            <p>B2B service</p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.why_hero}>
          <h1>
            Why Choose Primo<span>.</span>
          </h1>
          <p> Your package is not just a number to us.</p>

          <div className={styles.why_icons}>
            <Card
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              backgroundColor=" #FFFFFF"
              borderRadius="25px"
              color="#666666"
              height="552px"
              onClick={() => console.log("You clicked on the login!")}
              width={"100%"}
              fontSize="15px"
              margin="1rem 0"
            >
              <div className={styles.text}>
                <img src={Savetime} alt="savetime" />
                <h2>Save time</h2>
                <p>
                  With the help of our courier delivery service, you will take
                  care of your business knowing that our couriers will deliver
                  your parcel on time. We guarantee that even the most fragile
                  packages will be delivered safely.
                </p>
                <img className={styles.arrow} src={arrow} alt="arrow" />
                <div></div>
              </div>
            </Card>
            <Card
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              backgroundColor=" #FFFFFF"
              borderRadius="25px"
              color="#666666"
              height="552px"
              onClick={() => console.log("You clicked on the login!")}
              width={"100%"}
              fontSize="15px"
              margin="1rem 0"
            >
              <div className={styles.text}>
                <img src={tackIcon} alt="TrackIcon" />
                <h2>100% Reliable</h2>
                <p>
                  With our tracking system, you can always know where your
                  package is. Our company guarantees that the order will be
                  delivered straight into your hands without involving the third
                  parties. Confidential, reliable, fast.
                </p>
                <img className={styles.arrow} src={arrow} alt="arrow" />
              </div>
            </Card>
            <Card
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              backgroundColor=" #FFFFFF"
              borderRadius="25px"
              color="#666666"
              height="552px"
              onClick={() => console.log("You clicked on the login!")}
              width={"100%"}
              fontSize="15px"
              margin="1rem 0"
            >
              <div className={styles.text}>
                <img src={deliveryIcon} alt="DeliveryIcon" />
                <h2>We Are Here For You</h2>
                <p>
                  We will get the package directly from you. Forget the tedious
                  forms that you need to fill in and operators that need to call
                  back. While other companies fill out the forms Primo delivers
                  packages.
                </p>
                <img className={styles.arrow} src={arrow} alt="arrow" />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="Slider">
        <Slide />
      </div>
      <div className={styles.Section3}>
        <div className={styles.writeup}>
          <h1>
            Work with a reliable and committed team<span>.</span>
          </h1>
          <h4>Our drivers are fully trained and reliable.</h4>
          <h4>You can trust us to deliver peace of mind.</h4>
          <p>
            Learn more about us <img src={arrow} alt="arrow" />
          </p>
        </div>
        <div>
          <img
            src="https://mapleridge.com/sites/default/files/wp-content/uploads/2014/10/Delivery-Man-iStock_000009564355Medium.jpg"
            alt="delivery"
            width="100%"
            height="95%"
          />
        </div>
      </div>
      <div className={styles.Package}>
        <div className={styles.PackageCard}>
          <h3> Package details</h3>
          <div className={styles.flexicon}>
            <div>
              <img src={location} alt="location" />
              <p>Pick Up</p>
            </div>
            <div>
              <img src={Dropoff} alt="dropoff" />
              <p>Drop Off</p>
            </div>
            <div>
              <img src={packageicon} alt="package" />
              <p>Package</p>
            </div>
            <div>
              <img src={confirm} alt="confirm" />
              <p>Confirm</p>
            </div>
          </div>
          <div className={styles.flexbutton}>
            <Button
              border="none"
              backgroundColor="#ffffff"
              borderRadius="50px"
              color="#707070"
              height="38px"
              onClick={() => console.log("You clicked on the login!")}
              width={"100%"}
              fontSize="15px"
              margin="0"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              children="Envelope"
            />
            <Button
              border="none"
              backgroundColor="#cc0201"
              borderRadius="50px"
              color="#ffffff"
              height="38px"
              onClick={() => console.log("You clicked on the login!")}
              width={"100%"}
              fontSize="15px"
              margin="0 1rem 0rem 1rem"
              children="Box pack"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            />
            <Button
              border="none"
              backgroundColor="#ffffff"
              borderRadius="50px"
              color="#707070"
              height="38px"
              onClick={() => console.log("You clicked on the login!")}
              width={"100%"}
              fontSize="15px"
              margin="0"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              children="Other"
            />
          </div>
          <h2> Package Details </h2>
          <h4>Weight</h4>
          <p>Select estimate weight from the range below</p>
          <img className={styles.line} src={line} alt="line" width={"100%"} />
          <div className={styles.kg}>
            <p>0kg</p>
            <p>1000kg</p>
          </div>
          <div className={styles.fragile}>
            <h2>Fragile?</h2>
            <p>
              Yes
            </p>
              <img src={switchbox} alt="switch" />
          </div>
          <p>Is the package fragile? Or require special care?</p>
          
          <div className={styles.bottom_btn}>
          <p>Kindly describe the content of your package</p>

          <Button
            border="none"
            backgroundColor="#cc0201"
            borderRadius="50px"
            color="#FFFFFF"
            height="68px"
            onClick={() => console.log("You clicked on the login!")}
            width={"80%"}
            fontSize="19px"
            margin="none"
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            children="Confirm "
          />
            
         </div>
        </div>

        <div className={styles.card2}>
          <h1>Primo </h1>
          <h1>
            Delivery App<span>.</span>
          </h1>
          <p>Order and manage your deliveries</p>
          <p>seamlessly using </p>
          <p>our easy to use mobile app</p>

          <div className={styles.imgcard}>
            <img src={AppStore} alt="appStore" width={"100%"} />
            <img src={GooglePlay} alt="googlePlay" width={"100%"} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
