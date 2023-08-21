import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
//import ImageSlider from "../components/Slider";
import Titles from "../components/Titles";
import Card from "../components/Card";
export default function Home() {

    return (
        <>
        <Navbar />
<<<<<<< HEAD
=======
        {/* <ImageSlider /> */}
        <Titles />
>>>>>>> 3738d3b0b685a083a0991e0f4ef3328f25b2501b
        <div>
            <a href='#one'>홀리데이 패키지</a>
            <a href='#two'>이색 전원주택</a>
            <a href='#three'>홀리데이 커뮤니티</a>
            <a href='#four'>호스트 이야기</a>
        </div>
        <div id="one">
            <div>인기있는 파밍 홀리데이 패키지</div>
            <Card />
        </div>
        <div id="two">
            <div>살아보고 싶은 이색 농촌 전원 주택</div>
        </div>
        <div id="three">
            <div>파밍 홀리데이 순간들</div>
        </div>
        <div id="four">
            <div>파밍 홀리데이 슈퍼 호스트</div>
        </div>
        </>
    );
        
}