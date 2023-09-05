import React, { useState } from 'react';
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import ImageSlider from "../components/Slider";

export default function DetailMoment() {
    const [imgUrl,setImgUrl] = useState(['1']);
    return (
        <>
            <ImageSlider imgUrl={imgUrl}/> 
            <h2>파밍 홀리데이 순간들</h2>
            <div className={styles.card}>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-3.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`6개월 체험 프로그램`}
                    textMiddle1={`#토마토 재배 스마트팜`}/>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-3.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`6개월 체험 프로그램`}
                    textMiddle1={`#토마토 재배 스마트팜`}/>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-3.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`6개월 체험 프로그램`}
                    textMiddle1={`#토마토 재배 스마트팜`}/>
            </div>
        </>
    );
}

