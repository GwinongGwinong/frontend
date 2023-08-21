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
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    appendDots: (dots) => (
        <div
          style={{
            color: 'white',
            marginLeft: '38vw',
            marginBottom: '46vh',
            width: '100%',
            position: 'absolute',
            bottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ul> {dots} </ul>
        </div>
      ),
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


