import React, { Component } from "react";
import "../styles/Slider.css";
import styles from "../styles/Slider.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = (imgSlide,SliderTextTop) => {
  const imgArr = Object.values(imgSlide);

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
            marginLeft: '84%',
            marginBottom: '46vh',
            width: '10%',
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
        {imgArr&&
            imgArr[0].map((imgURL,index)=> (
            <div>
                <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}/public_assets/mainImg/main_${imgURL}.svg`}
                    alt="main"
                />
                <p className={styles.slideText}>{SliderTextTop.id}</p>
                <p className={styles.intro}>함께 가꾸어나가는 귀농생활을 귀농귀농에서 함께해보세요!
                행복한 전원생활을 함께해보세요!</p>
            </div>
        ))}
    </Slider>
    </div>
    
  );
};

export default ImageSlider;


