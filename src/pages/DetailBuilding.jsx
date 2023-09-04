import React from 'react';
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
export default function DetailBuilding() {
    return (
        <>
            <h2>살아보고 싶은 이색 농촌 전원 주택</h2>
            <div className={styles.card}>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    imageUnder={`인기`}
                    textTop={`청원 사과마을 전원주택`}
                    textTopRight={`4.91`}
                    textMiddle1={`전라북도 임실군*김옥춘 할머니와 함께`}
                    textMiddle2={`2023년 8월 31일 ~ 2024년 1월 31일`}
                    textUnderLeft={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-host.svg`}
                    textUnderRight={`월10/6개월`}/>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    imageUnder={`인기`}
                    textTop={`청원 사과마을 전원주택`}
                    textTopRight={`4.91`}
                    textMiddle1={`전라북도 임실군*김옥춘 할머니와 함께`}
                    textMiddle2={`2023년 8월 31일 ~ 2024년 1월 31일`}
                    textUnderLeft={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-host.svg`}
                    textUnderRight={`월10/6개월`}/>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    imageUnder={`인기`}
                    textTop={`청원 사과마을 전원주택`}
                    textTopRight={`4.91`}
                    textMiddle1={`전라북도 임실군*김옥춘 할머니와 함께`}
                    textMiddle2={`2023년 8월 31일 ~ 2024년 1월 31일`}
                    textUnderLeft={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-host.svg`}
                    textUnderRight={`월10/6개월`}/>
            </div>
        </>
    );
}

