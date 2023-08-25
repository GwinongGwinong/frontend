import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'; 
import styles from "../styles/Home.module.css";
import ImageSlider from "../components/Slider";
import Card from "../components/Card";
export default function Home() {
    const [imgUrl,setImgUrl] = useState(['1','2','2']);

    return (
        <>
        <ImageSlider imgUrl={imgUrl}/>   
        <div className={styles.titles}>
            <a href='#one'>홀리데이 패키지</a>
            <a href='#two'>이색 전원주택</a>
            <a href='#three'>홀리데이 커뮤니티</a>
            <a href='#four'>호스트 이야기</a>
        </div>
        <div id="one">
            <h2>인기있는 파밍 홀리데이 패키지</h2>
            <div className={styles.card}>
                <Link to="/holidaypackage"> 
                    <Card />
                </Link>
                <Link to="/holidaypackage"> 
                    <Card />
                </Link>
                <Link to="/holidaypackage"> 
                    <Card />
                </Link>
            </div>
        </div>
        <div id="two">
            <h2>살아보고 싶은 이색 농촌 전원 주택</h2>
            <div className={styles.card}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <div id="three">
            <h2>파밍 홀리데이 순간들</h2>
            <div className={styles.card}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <div id="four">
            <h2>파밍 홀리데이 슈퍼 호스트</h2>
            <div className={styles.card}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        </>
    );
        
}