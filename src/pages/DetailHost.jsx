import React from 'react';
import CardLong from "../components/CardLong";
import styles from "../styles/Home.module.css";
export default function DetailHost() {
    return (
        <>
            <h2>파밍 홀리데이 슈퍼 호스트</h2>
            <div className={styles.card}>
                <CardLong
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/host-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`양봉 양춘식 호스트`}
                    textMiddle1={`#양봉 30년차`}
                    textMiddle2={`#벌꿀로 강남 건물주`}
                    textUnderRight={`4.91`}/>
                <CardLong
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/host-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`양봉 양춘식 호스트`}
                    textMiddle1={`#양봉 30년차`}
                    textMiddle2={`#벌꿀로 강남 건물주`}
                    textUnderRight={`4.91`}/>
                <CardLong
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/host-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`양봉 양춘식 호스트`}
                    textMiddle1={`#양봉 30년차`}
                    textMiddle2={`#벌꿀로 강남 건물주`}
                    textUnderRight={`4.91`}/>
                <CardLong
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/host-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`양봉 양춘식 호스트`}
                    textMiddle1={`#양봉 30년차`}
                    textMiddle2={`#벌꿀로 강남 건물주`}
                    textUnderRight={`4.91`}/>
            </div>
        </>
    );
}

