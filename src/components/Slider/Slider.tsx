import React, { FC } from 'react'
import styles from './styles.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  images  from "../Slider/images"

interface setting{
    infinite: boolean;
    dots: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;

}

const Slide: FC = () => {

    const settings:setting = {
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };

    
    


  return (
    <>
      
          <div className={styles.imgslider}>
        <Slider {...settings} >
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
              </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Slide;
