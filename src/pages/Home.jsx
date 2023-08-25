import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/Slider";
import Card from "../components/Card";
export default function Home() {
    const [imgUrl,setImgUrl] = useState(['main','main','main']);
    /*
    Card Component
    : imageTop,imageUnder,
    textTop,textTopRight,
    textMiddle1,textMiddle2,
    textUnderLeft,textUnderRight
    */
    return (
        <>
        <Navbar />
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
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/package-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/heart.png`}
                    imageUnder={`모집중`}
                    textTop={`벼농사 재배 경운기`}
                    textMiddle1={`전라북도 부안군`}
                    textMiddle2={`2023년 8월 10일 ~ 2024년 1월 10일`}
                    textUnderRight={`월230/6개월`}/>
                <Card
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/heart.png`}
                    imageUnder={`모집중`}
                    textTop={`치즈 유가공`}
                    textMiddle1={`전라북도 임실군`}
                    textMiddle2={`2023년 8월 20일 ~ 2024년 1월 20일`}
                    textUnderRight={`월220/7개월`}/>
                <Card />
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