import React, { Component } from "react";
import "../styles/Slider.css";
import styles from "../styles/Slider.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
   
  };

  return (

    <div className={styles.mainWrap}>
    <Slider {...settings}>
        <div>
            <img
                src={`${process.env.PUBLIC_URL}/public_assets/main.png`}
                alt="main"
            />
        </div>
        <div>
            <img
                src={`${process.env.PUBLIC_URL}/public_assets/main.png`}
                alt="main"
            />      
        </div>
        <div>
            <img
                src={`${process.env.PUBLIC_URL}/public_assets/main.png`}
                alt="main"
            />      
        </div>
    </Slider>
    </div>
    
  );
};

export default ImageSlider;


