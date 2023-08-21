import React from 'react';
import styles from '../styles/Card.module.css'
export default function Card() {
    return (
        <span className={styles.span}>
            <div className={styles.wrap}>
                <div><img src={`${process.env.PUBLIC_URL}/public_assets/package-1.png`} /></div>
                <div className={styles.heart}><img className={styles.img} src={`${process.env.PUBLIC_URL}/public_assets/heart.png`} /></div>
                <div className={styles.text}><p>모집중</p></div>
            </div>
            <div>
                <div>벼농사 재배 경운기</div>
                <div>전라북도 부안군</div>
                <div>2023년 8월 10일 ~ 2024년 1월 10일</div>
                <div>월230/6개월</div>
            </div>
        </span>
    );
}

