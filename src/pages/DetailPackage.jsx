import React, { useState } from 'react';
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import ImageSlider from "../components/Slider";

export default function DetailPackage() {
    const [imgUrl,setImgUrl] = useState(['1']);
    return (
        <>
            <ImageSlider imgUrl={imgUrl}/> 
            <h2>인기있는 파밍 홀리데이 패키지</h2>
            <div className={styles.card}>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-1.png`}
                    imageUnder={`모집중`}
                    textTop={`벼농사 재배 경운기`}
                    textTopRight={`4.91`}
                    textMiddle1={`전라북도 부안군`}
                    textMiddle2={`2023년 8월 10일 ~ 2024년 1월 10일`}
                    textUnderRight={`월230/6개월`}/>
                    <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-1.png`}
                    imageUnder={`모집중`}
                    textTop={`벼농사 재배 경운기`}
                    textTopRight={`4.91`}
                    textMiddle1={`전라북도 부안군`}
                    textMiddle2={`2023년 8월 10일 ~ 2024년 1월 10일`}
                    textUnderRight={`월230/6개월`}/>
                    <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-1.png`}
                    imageUnder={`모집중`}
                    textTop={`벼농사 재배 경운기`}
                    textTopRight={`4.91`}
                    textMiddle1={`전라북도 부안군`}
                    textMiddle2={`2023년 8월 10일 ~ 2024년 1월 10일`}
                    textUnderRight={`월230/6개월`}/>
            </div>
        </>
    );
}

